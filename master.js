let link = document.querySelectorAll("link");
let i = document.querySelectorAll("i");
console.log(i[9]);
console.log(link[0]);

function darkLightMode() {
  if (i[9].classList.contains("fa-moon")) {
    link[0].href = "./branchLight.css";
    i[9].classList.replace("fa-moon", "fa-sun");
    setTimeout(() => {
      i[9].classList.remove("dance");
    }, 300);
    i[9].classList.add("dance");
  } else {
    link[0].href = "./master.css";
    i[9].classList.replace("fa-sun", "fa-moon");
    setTimeout(() => {
      i[9].classList.remove("dance");
    }, 300);
    i[9].classList.add("dance");
  }
}

i[9].addEventListener("click", darkLightMode);

// ###########sideBar#################
let nav = document.querySelector("header .active");

i[0].addEventListener("click", () => {
  console.log(nav.clientWidth);
  console.log(nav.scrollWidth);
  if (nav.clientWidth == 0) {
    nav.style.width = 200 + "px";
  } else {
    nav.style.width = null;
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 850) {
    nav.style.width = null;
  }
});
