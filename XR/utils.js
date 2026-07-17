function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain attribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
  /* All includes processed — highlight the current nav link and
     populate the footer's "last updated" timestamp. */
  setActiveNav();
  renderLastUpdated();
};

// ---- Last updated timestamp ----
// Shows the date/time of the most recent commit to the site's GitHub repo,
// so it reflects a change to ANY page. Cached per session to limit API calls;
// falls back to the current page's file-modified date if the API is unreachable.
function renderLastUpdated() {
  var el = document.getElementById('last-updated');
  if (!el) return;

  function show(d) {
    if (isNaN(d.getTime())) return;
    el.textContent = 'Last updated: ' + d.toLocaleString(undefined, {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: 'numeric', minute: '2-digit', timeZoneName: 'short'
    });
  }
  function fallback() { show(new Date(document.lastModified)); }

  // Reuse a value already fetched this session to avoid extra API calls.
  try {
    var cached = sessionStorage.getItem('xr_last_commit');
    if (cached) { show(new Date(cached)); return; }
  } catch (e) { /* sessionStorage unavailable — ignore */ }

  if (!window.fetch) { fallback(); return; }
  fetch('https://api.github.com/repos/chuck-a-knight58/HOX/commits?per_page=1', { cache: 'no-store' })
    .then(function (res) { if (!res.ok) throw new Error('HTTP ' + res.status); return res.json(); })
    .then(function (data) {
      var iso = data && data[0] && data[0].commit && data[0].commit.committer &&
                data[0].commit.committer.date;
      if (!iso) throw new Error('no commit date');
      try { sessionStorage.setItem('xr_last_commit', iso); } catch (e) {}
      show(new Date(iso));
    })
    .catch(fallback);
}

// ---- Active nav highlighter ----
// Adds .active class to the <a> in .navbar whose href matches the current page.
function setActiveNav() {
  var nav = document.querySelector('.navbar');
  if (!nav) return;
  var path = window.location.pathname;
  var current = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
  if (current === '') current = 'index.html';
  var links = nav.querySelectorAll('a');
  for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute('href');
    if (!href) continue;
    var linkPage = href.substring(href.lastIndexOf('/') + 1);
    if (linkPage === current) {
      links[i].classList.add('active');
    }
  }
}

// ---- Newsletter Subscribe Modal ----
// Event-delegated so it works with footer.html injected via includeHTML().
(function () {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function getModal() { return document.getElementById('subscribe-modal'); }

  function openSubscribeModal() {
    var modal = getModal();
    if (!modal) return;
    modal.hidden = false;
    var input = document.getElementById('subscribe-email');
    if (input) { setTimeout(function () { input.focus(); }, 0); }
  }

  function closeSubscribeModal() {
    var modal = getModal();
    if (!modal) return;
    modal.hidden = true;
    setSubscribeStatus('', false);
  }

  function setSubscribeStatus(msg, isError) {
    var s = document.getElementById('subscribe-status');
    if (!s) return;
    s.textContent = msg;
    s.style.color = isError ? '#ff6b6b' : 'goldenrod';
  }

  function handleSubscribeSubmit(form) {
    var input = document.getElementById('subscribe-email');
    var email = (input.value || '').trim().toLowerCase();
    if (!emailPattern.test(email)) {
      setSubscribeStatus('Please enter a valid email address.', true);
      return;
    }
    if (typeof db === 'undefined' || typeof firebase === 'undefined') {
      setSubscribeStatus('Service unavailable. Please try again later.', true);
      return;
    }
    var btn = form.querySelector('button[type="submit"]');
    if (btn) btn.disabled = true;
    setSubscribeStatus('Subscribing...', false);

    db.collection('newsletter_subscribers').doc(email).set({
      email: email,
      subscribedAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true }).then(function () {
      setSubscribeStatus('Thanks for subscribing!', false);
      form.reset();
    }).catch(function (err) {
      console.error('Newsletter subscription failed:', err);
      setSubscribeStatus('Something went wrong. Please try again later.', true);
    }).finally(function () {
      if (btn) btn.disabled = false;
    });
  }

  document.addEventListener('click', function (e) {
    var target = e.target;
    if (!target.closest) return;
    if (target.closest('#footer-subscribe')) {
      e.preventDefault();
      openSubscribeModal();
      return;
    }
    if (target.closest('#subscribe-close')) {
      e.preventDefault();
      closeSubscribeModal();
      return;
    }
    // Click on overlay (outside panel) closes the modal.
    if (target.id === 'subscribe-modal') {
      closeSubscribeModal();
    }
  });

  document.addEventListener('submit', function (e) {
    if (e.target && e.target.id === 'subscribe-form') {
      e.preventDefault();
      handleSubscribeSubmit(e.target);
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var modal = getModal();
      if (modal && !modal.hidden) closeSubscribeModal();
    }
  });
})();