const humberger = document.querySelector(".humberger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
const foods = document.querySelectorAll(".third .image");
const darkMode = document.querySelector(".dark-mode");
const check = document.querySelector("#dark");
const preview = document.querySelector(".preview img");
const root = document.body;
const Switch = document.querySelector(".switch");
const container = document.querySelector(".container");

///EVENT FOR TOGGLE RESPONSIVE NAV REVEAL
humberger.addEventListener("click", () => {
  nav.classList.toggle("open");
  humberger.classList.toggle("isClick");
  darkMode.classList.toggle("isWhite");
});

///EVENT FOR CLOSE RESPONSIVE NAV WHEN CLICK OTHER IN DOC
container.addEventListener("click", () => {
  nav.classList.remove("open");
  humberger.classList.remove("isClick");
});

///EVENT FOR TOGGLE DARKMODE
darkMode.addEventListener("click", () => {
  if (check.checked) {
    root.style.setProperty("--white", "#000");
    root.style.setProperty("--black", "#fff");
    Switch.src = "../assets/icons/sun.png";
    Switch.style.filter = "invert(0)";
  } else {
    root.style.setProperty("--white", "#fff");
    root.style.setProperty("--black", "#000");
    Switch.src = "../assets/icons/moon.png";
    Switch.style.filter = "invert(1)";
  }
});

////FUNCTION FOR REPLACE THEME COLOR
function theme(color) {
  root.style.setProperty("--color-1", color);
}

////FUNCTION FOR REPLACE PREVIEW IMAGE
function previewFunction(image) {
  preview.src = image.src;
}
////ACTIVE FOOD SELECTION
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].onclick = function() {
    for (let j = 0; j < navLinks.length; j++) {
      if (navLinks[j] != this) navLinks[j].classList.remove("active");
    }
    navLinks[i].classList.add("active");
  };
}

////ACTIVE LINK SELECTION EVENT
for (let i = 0; i < foods.length; i++) {
  foods[i].onclick = function() {
    for (let j = 0; j < foods.length; j++) {
      if (foods[j] != this) foods[j].classList.remove("selected");
    }
    foods[i].classList.add("selected");
  };
}
