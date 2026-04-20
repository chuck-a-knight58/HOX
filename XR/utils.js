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
};

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