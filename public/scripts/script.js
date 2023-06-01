AOS.init({
  duration: 2000,
  once: true,
});

var nav = document.querySelector("nav");
/*
document.getElementById("mulaiSewa").addEventListener("click", function () {
  window.location.href = "/cars";
});

document.getElementById("mulaiSewa2").addEventListener("click", function () {
  window.location.href = "/cars";
});
*/

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    nav.classList.add("bg-custom-nav", "shadow");
    nav.style.backgroundColor = "white";
  } else {
    nav.classList.remove("bg-custom-nav", "shadow");
    nav.style.backgroundColor = "transparent";
  }
});
