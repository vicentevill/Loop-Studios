const hamburger = document.querySelector("img#hamburgerMenu");
const exit = document.querySelector("img#menuExit");

function show() {
  document.querySelector("header").style.display = "none";
  document.querySelector("main").style.display = "none";
  document.querySelector("footer").style.display = "none";
  document.querySelector("body").style.background = "black";
  document.querySelector("nav#mobileNav").style.display = "flex";
}

function hide() {
  document.querySelector("header").style.display = "";
  document.querySelector("main").style.display = "";
  document.querySelector("footer").style.display = "";
  document.querySelector("body").style.background = "";
  document.querySelector("nav#mobileNav").style.display = "";
}

hamburger.addEventListener("click", () => {
  show();
});

exit.addEventListener("click", () => {
  hide();
});
