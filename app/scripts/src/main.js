var scrollArrow = document.querySelectorAll(".scroll-arrow-container");
var userScrolled = false;

if (!userScrolled) {
  window.onscroll = function(e) {
    if (window.pageYOffset) {
      scrollArrow[0].classList.add("fadeOut");
    } else {
      scrollArrow[0].classList.remove("fadeOut");
    }
  }
}
