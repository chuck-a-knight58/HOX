// ---- Age gate ----
// Loaded in the <head> of every page. Until the visitor confirms a birthdate
// at least MIN_AGE years ago, the page is hidden behind a full-screen check.
// "Remember me" keeps the answer in localStorage (asked once per browser);
// otherwise it lasts for the browser session (sessionStorage).
(function () {
  var MIN_AGE = 21;
  var KEY = 'xk-age-verified';

  function stored(store) {
    try { return window[store].getItem(KEY) === '1'; } catch (e) { return false; }
  }
  function remember(store) {
    try { window[store].setItem(KEY, '1'); } catch (e) {}
  }
  if (stored('localStorage') || stored('sessionStorage')) return;

  var root = document.documentElement;
  root.classList.add('xk-gated');

  var css =
    '@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500&display=swap");' +
    'html.xk-gated, html.xk-gated body { overflow: hidden; }' +
    'html.xk-gated body > *:not(#xk-age-gate) { visibility: hidden; }' +
    '#xk-age-gate { position: fixed; inset: 0; z-index: 2147483647; overflow-y: auto; background: #000;' +
    '  color: goldenrod; font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;' +
    '  display: flex; align-items: center; justify-content: center; padding: 24px 16px; box-sizing: border-box; }' +
    '#xk-age-gate * { box-sizing: border-box; }' +
    '#xk-age-gate .xk-panel { max-width: 560px; width: 100%; text-align: center; background: #111;' +
    '  border: 1px solid goldenrod; padding: 32px 28px; box-shadow: 0 4px 24px rgba(0,0,0,0.6); }' +
    '#xk-age-gate h1, #xk-age-gate h2 { font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;' +
    '  color: goldenrod; letter-spacing: 0.02em; margin: 0 0 12px; }' +
    '#xk-age-gate h1 { font-size: 2.4em; font-weight: 700; }' +
    '#xk-age-gate h2 { font-size: 1.4em; font-weight: 600; line-height: 1.3; }' +
    '#xk-age-gate p { line-height: 1.55; margin: 0 0 20px; color: #ccc; }' +
    '#xk-age-gate .xk-divider { width: 80px; height: 1px; background: #8c7035; margin: 0 auto 18px; border: 0; }' +
    '#xk-age-gate .xk-fields { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 16px; }' +
    '#xk-age-gate label.xk-field { display: flex; flex-direction: column; font-size: 0.8em; color: #8c7035; text-align: left; }' +
    '#xk-age-gate select { margin-top: 4px; background: #000; color: goldenrod; border: 1px solid goldenrod;' +
    '  padding: 8px 10px; font-size: 1em; font-family: inherit; min-width: 90px; }' +
    '#xk-age-gate select:focus-visible, #xk-age-gate button:focus-visible, #xk-age-gate input:focus-visible {' +
    '  outline: 2px solid goldenrod; outline-offset: 2px; }' +
    '#xk-age-gate .xk-remember { display: inline-flex; align-items: center; gap: 8px; margin-bottom: 20px; cursor: pointer; }' +
    '#xk-age-gate .xk-remember input { accent-color: goldenrod; width: 18px; height: 18px; }' +
    '#xk-age-gate button { padding: 12px 40px; background: goldenrod; color: #000; border: none; font-size: 16px;' +
    '  font-weight: bold; cursor: pointer; font-family: "Cormorant Garamond", Georgia, serif; letter-spacing: 0.08em; }' +
    '#xk-age-gate button:hover { background: #b07a2b; }' +
    '#xk-age-gate .xk-error { color: #ff8a80; min-height: 1.4em; margin: 12px 0 0; font-size: 0.9em; }';
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                'August', 'September', 'October', 'November', 'December'];

  function options(placeholder, values, labels) {
    var html = '<option value="">' + placeholder + '</option>';
    for (var i = 0; i < values.length; i++) {
      html += '<option value="' + values[i] + '">' + (labels ? labels[i] : values[i]) + '</option>';
    }
    return html;
  }
  function range(from, to) {
    var out = [];
    var step = from <= to ? 1 : -1;
    for (var n = from; n !== to + step; n += step) out.push(n);
    return out;
  }

  function ageOn(today, y, m, d) {
    var age = today.getFullYear() - y;
    if (today.getMonth() + 1 < m || (today.getMonth() + 1 === m && today.getDate() < d)) age--;
    return age;
  }

  function build() {
    var thisYear = new Date().getFullYear();
    var gate = document.createElement('div');
    gate.id = 'xk-age-gate';
    gate.setAttribute('role', 'dialog');
    gate.setAttribute('aria-modal', 'true');
    gate.setAttribute('aria-labelledby', 'xk-age-title');
    gate.innerHTML =
      '<form class="xk-panel" novalidate>' +
      '<h1 id="xk-age-title">Xanadu Kink</h1>' +
      '<hr class="xk-divider">' +
      '<h2>Warning: This site may contain adult content and images that are not suitable for minors.</h2>' +
      '<p>By entering your birthdate below, you are confirming that you are over the age of ' + MIN_AGE +
      ' and that you consent to viewing potentially graphic images or other content.</p>' +
      '<div class="xk-fields">' +
      '<label class="xk-field">Month<select name="month" required>' + options('Month', range(1, 12), MONTHS) + '</select></label>' +
      '<label class="xk-field">Day<select name="day" required>' + options('Day', range(1, 31)) + '</select></label>' +
      '<label class="xk-field">Year<select name="year" required>' + options('Year', range(thisYear, thisYear - 110)) + '</select></label>' +
      '</div>' +
      '<label class="xk-remember"><input type="checkbox" name="remember"> Remember me</label>' +
      '<div><button type="submit">SUBMIT</button></div>' +
      '<p class="xk-error" role="alert"></p>' +
      '</form>';
    document.body.appendChild(gate);

    var form = gate.querySelector('form');
    var error = gate.querySelector('.xk-error');
    form.month.focus();

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var y = +form.year.value, m = +form.month.value, d = +form.day.value;
      if (!y || !m || !d) { error.textContent = 'Please choose your month, day and year of birth.'; return; }
      var birth = new Date(y, m - 1, d);
      if (birth.getMonth() !== m - 1) { error.textContent = 'That date does not exist. Please check the day.'; return; }

      if (ageOn(new Date(), y, m, d) < MIN_AGE) {
        form.innerHTML =
          '<h1 id="xk-age-title">Xanadu Kink</h1><hr class="xk-divider">' +
          '<h2>Sorry, you must be ' + MIN_AGE + ' or older to enter this site.</h2>';
        return;
      }

      remember(form.remember.checked ? 'localStorage' : 'sessionStorage');
      gate.parentNode.removeChild(gate);
      root.classList.remove('xk-gated');
    });
  }

  if (document.body) build();
  else document.addEventListener('DOMContentLoaded', build);
})();
