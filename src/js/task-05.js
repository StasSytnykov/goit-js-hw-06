const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  gitoutput.textContent = event.currentTarget.value;
});
