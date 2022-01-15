function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorValue = document.querySelector(".color");
const buttonChangeColor = document.querySelector("button");
const body = document.body;

buttonChangeColor.addEventListener("click", () => {
  colorValue.textContent = getRandomHexColor();
  body.style.backgroundColor = colorValue.textContent;
});
