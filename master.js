let link = document.querySelectorAll("link");
let i = document.querySelectorAll("i");
console.log(i[2]);
console.log(link[0]);

function darkLightMode() {
  if (i[2].classList.contains("fa-moon")) {
    link[0].href = "./branchLight.css";
    i[2].classList.replace("fa-moon", "fa-sun");
    setTimeout(() => {
      i[2].classList.remove("dance");
    }, 300);
    i[2].classList.add("dance");
  } else {
    link[0].href = "./master.css";
    i[2].classList.replace("fa-sun", "fa-moon");
    setTimeout(() => {
      i[2].classList.remove("dance");
    }, 300);
    i[2].classList.add("dance");
  }
}

i[2].addEventListener("click", darkLightMode);
