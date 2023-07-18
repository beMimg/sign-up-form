function validateForm() {
  var password1 = document.querySelector("#password").value;
  var password2 = document.querySelector("#confirm-password").value;

  if (password1 !== password2) {
    alert("Passwords do not match");
    return false;
  }

  return true;
}
