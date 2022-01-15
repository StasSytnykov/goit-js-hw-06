function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const createBoxesBtn = document.querySelector("button[data-create]");
const destroyBoxesBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

createBoxesBtn.addEventListener("click", createBoxes);

function inputValue(value) {
  return (value = input.value);
}

input.addEventListener("input", inputValue);

const allBoxes = [];
let boxSizes = 30;

function createBoxes(amount) {
  amount = inputValue();

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");

    box.style.width = `${boxSizes}px`;
    box.style.height = `${boxSizes}px`;

    i >= 0 ? (boxSizes += 10) : boxSizes;

    box.style.backgroundColor = getRandomHexColor();

    allBoxes.push(box);
  }

  boxes.append(...allBoxes);
  input.value = "";
}

destroyBoxesBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  allBoxes.map((element) => element.remove());
  allBoxes.length = 0;
  boxSizes = 30;
  input.value = "";
}
