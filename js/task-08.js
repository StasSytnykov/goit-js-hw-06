const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  }

  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    console.log(value, name);
  });

  event.currentTarget.reset();
}
