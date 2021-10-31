const mailingListForm = document.querySelector("form");
const emailCelebrationDiv = document.querySelector("#email-celebration-div");
const emailFormInput = mailingListForm.querySelector("input");
const emailFormErrorMessage = mailingListForm.querySelector("p");

mailingListForm.addEventListener("submit", submitData);
emailFormInput.addEventListener("input", updateInputValue);

function checkEmail(email) {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailRegex.test(email);
}

function updateInputValue() {
  toggleError(false);
}

function submitData(e) {
  e.preventDefault();

  const userEmail = emailFormInput.value.trim();

  if (checkEmail(userEmail)) handleAppreciation();
  else handleError(userEmail);
}

function handleAppreciation() {
  console.log("fol");
  toggleError(false);
  emailFormInput.value = "";
  //   TODO show that value is saved
  emailCelebrationDiv.classList.add('celebrate')
}

const errorMessages = {
  emptyInput: "Please don't leave the input area empty!",
  invalidEmail: "Please provide a valid email.",
};

function handleError(userEmail) {
  let errCode;
  if (userEmail === "") {
    errCode = "emptyInput";
  } else {
    errCode = "invalidEmail";
  }
  const errorMessage = errorMessages[errCode];

  emailFormErrorMessage.innerText = errorMessage;
  toggleError((isError = true));
}

function toggleError(isError = false) {
  if (isError) mailingListForm.classList.add("error-happened");
  else mailingListForm.classList.remove("error-happened");
}
