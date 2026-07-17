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
  /* All includes processed — highlight the current nav link. */
  setActiveNav();
};

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
