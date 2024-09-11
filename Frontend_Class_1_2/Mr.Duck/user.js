document.forms["userForm"].addEventListener("submit", userValidation);

function userValidation(e) {
  e.preventDefault();
  const userForm = document.forms["userForm"];
  const email = userForm["email"];
  const username = userForm["username"];
  const password = userForm["password"];
  const errorEmailMsg = document.querySelector(".errorEmailMsg");
  const errorUsernameMsg = document.querySelector(".errorUsernameMsg");
  const errorPasswordMsg = document.querySelector(".errorPasswordMsg");
  console.log(username.value.length >= 4);
  if (username.value.length >= 4 && username.value.length < 15) {
    alert("User signed up");
    email.value = "";
    username.value = "";
    password.value = "";
    errorUsernameMsg.innerText = "";
  } else {
    errorUsernameMsg.innerText =
      "The username must be between 4 and 15 characters.";
    errorUsernameMsg.style.color = "red";
  }
}
