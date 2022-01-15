const input = document.querySelector("input");
const text = document.querySelector("#text");

input.addEventListener("input", (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
});
