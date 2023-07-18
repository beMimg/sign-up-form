var errorElement = document.querySelector("#error");
const userForm = document.querySelector("#form");
userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm();
});

const userPassword = document.querySelector("#password");
userPassword.addEventListener("input", () => {
  validateForm();
});

const userPasswordConfirmation = document.querySelector("#confirm-password");
userPasswordConfirmation.addEventListener("input", () => {
  validateForm();
});

function validateForm() {
  let password1 = userPassword.value;
  let password2 = userPasswordConfirmation.value;

  if (password1 !== password2) {
    errorElement.textContent = "Passwords do not match";
    return false;
  }
  if (password1.length < 8) {
    errorElement.textContent = "Password must have at least 8 characters";
    return false;
  }
  errorElement.textContent = "";
  return true;
}
