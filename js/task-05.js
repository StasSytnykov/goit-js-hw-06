const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  event.currentTarget.value !== ""
    ? (output.textContent = event.currentTarget.value)
    : (output.textContent = "Anonymous");
});
