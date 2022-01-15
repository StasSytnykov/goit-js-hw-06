const textInput = document.querySelector("#validation-input");
const inputLength = textInput.getAttribute("data-length");

const borderColor = (event) => {
  event.currentTarget.value.length < Number(inputLength)
    ? textInput.setAttribute("class", "invalid")
    : textInput.setAttribute("class", "valid");
};

textInput.addEventListener("blur", borderColor);
