let button = document.querySelector('.header__burger');
let nav = document.querySelector('.header__nav');
const mediaQuery = window.matchMedia('(max-width: 1279px)');

function handleMobileChange (l) {
  if (mediaQuery.matches) {
  button.classList.remove("header__burger--nojs");
  nav.classList.add("header__nav--js");

button.onclick = function () {
  nav.classList.toggle('header__nav--hidden');
}
  } else {
    button.classList.add("header__burger--nojs");
    nav.classList.remove("header__nav--js");
    nav.classList.remove("header__nav--hidden");
  }
}

mediaQuery.addEventListener('change', handleMobileChange);
handleMobileChange(mediaQuery);
