function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const numbColor = document.querySelector(".color");
const body = document.querySelector("body")


  btn.style.backgroundColor = "#4E75FF";
  btn.style.borderRadiu = "8px";
  btn.style.width = "148px";
  btn.style.height = "40px";
  btn.style.borderRadius = "8px";
  btn.style.border = "none";
  btn.style.color = "#FFF";


function handleClick(){
  body.style.backgroundColor = getRandomHexColor();
  numbColor.textContent = getRandomHexColor();
}
btn.addEventListener("click", handleClick);
