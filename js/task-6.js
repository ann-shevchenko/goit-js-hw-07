function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("#controls input");
const btnCreate = document.querySelector("#controls button[data-create]");
const btnDestroy = document.querySelector("#controls button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();

  for (let i = 0, size = 30; i < amount; i++, size += 10) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }

  boxesContainer.innerHTML = ""; 
  boxesContainer.appendChild(fragment);
}

function pressButton(){
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert('Please enter a number between 1 and 100.');
  }
}

function destroyBox(){
  boxesContainer.innerHTML = "";
}

btnCreate.addEventListener("click", pressButton);
btnDestroy.addEventListener("click", destroyBox);




