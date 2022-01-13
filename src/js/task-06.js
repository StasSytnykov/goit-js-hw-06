const textInput = document.querySelector("#validation-input");
const inputLength = textInput.getAttribute("data-length");

const borderColor = (event) => {
  event.currentTarget.value.length < Number(inputLength)
    ? textInput.classList.add("invalid")
    : textInput.classList.replace("invalid", "valid");
};

textInput.addEventListener("blur", borderColor);
