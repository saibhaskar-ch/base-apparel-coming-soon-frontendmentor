const textFieldContainer = document.getElementById("text-field");
const inputEmailField = document.getElementById("email-input");
const errorLogo = document.getElementById("error-logo");
const submitButtom = document.getElementById("submit-button");
const errorMessage = document.getElementById("error-messsage");

function isEmailValid(email) {
  return (
    email.length > 0 &&
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
  );
}

function displayError() {
  textFieldContainer.classList.add("border-red-400");
  errorLogo.classList.remove("invisible");
  errorMessage.classList.remove("invisible");
}

function hideError() {
  textFieldContainer.classList.remove("border-red-400");
  errorLogo.classList.add("invisible");
  errorMessage.classList.add("invisible");
}

textFieldContainer.addEventListener("click", (event) => {
  if (
    event.target.id === "email-input" ||
    event.target.id === "text-field" ||
    event.target.id === "error-logo" ||
    event.target.id === "error-logo-img"
  ) {
    textFieldContainer.classList.add("border-[hsla(0,36%,70%,1)]");
    textFieldContainer.focus();
    inputEmailField.focus();
  }
});

textFieldContainer.addEventListener("focusout", () => {
  textFieldContainer.classList.remove("border-[hsla(0,36%,70%,1)]");

  const emailString = inputEmailField.value;
  if (!isEmailValid(emailString)) {
    displayError();
  } else {
    hideError();
  }
});

submitButtom.addEventListener("click", () => {
  textFieldContainer.classList.remove("border-[hsla(0,36%,70%,1)]");

  const emailString = inputEmailField.value;
  if (!isEmailValid(emailString)) {
    displayError();
  } else {
      hideError();
      alert('Email successfully added');78
  }
});
