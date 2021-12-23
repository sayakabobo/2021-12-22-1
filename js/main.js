const hamburgerMenu = document.getElementById("hamburger");
const header = document.getElementById("header");
const mask = document.getElementById("mask");
const links = document.querySelectorAll("#navigation a");

const pageTop = document.getElementById("to-top");
//console.log(pageTop);

hamburgerMenu.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
  } else {
    header.classList.add("open");
  }
});

mask.addEventListener("click", () => {
  header.classList.remove("open");
});

links.forEach(function (item) {
  item.addEventListener("click", () => {
    header.classList.remove("open");
  });
});

pageTop.hidden = true;

window.addEventListener("scroll", function (e) {
  const top = window.pageYOffset;
  if (top > 700) {
    pageTop.hidden = false;
    //pageTop.animate([{ opacity: "0" }, { opacity: "1" }], 1500);
  } else {
    pageTop.hidden = true;
  }
});

pageTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
