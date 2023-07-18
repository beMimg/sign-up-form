var errorElement = document.querySelector("#error");

function validateForm() {
  var password1 = document.querySelector("#password").value;
  var password2 = document.querySelector("#confirm-password").value;

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
