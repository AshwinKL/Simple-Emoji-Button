"use-strict";

const button = document.querySelector(".button");
const text = document.querySelector(".text");
const body = document.querySelector(".hbody");

button.addEventListener("click", clickHandler);

let sad = true;
function clickHandler() {
  for (i = 0; i < 1; i++) {
    if (sad == true) {
      text.style.color = "#05be05";
      text.textContent = "Happy";
      body.classList.add("happy");
      sad = false;
      break;
    }
    if (sad == false) {
      text.style.color = "#fe0000";
      body.classList.remove("happy");
      text.textContent = "Sad";
      sad = true;
    }
  }
}
