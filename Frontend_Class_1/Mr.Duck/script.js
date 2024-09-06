let messages = [];

window.addEventListener("load", () => {
  messages = JSON.parse(window.localStorage.getItem("messages"));

  const list = document.querySelector(".list");
  for (let i = 0; i < messages.length; i++) {
    const li = document.createElement("li");
    li.innerText = messages[i];
    list.appendChild(li);
  }
});

document.getElementById("submitBtn").addEventListener("click", function () {
  const inputField = document.getElementById("problemInput");
  const response = document.getElementById("response");

  if (inputField.value.trim() === "") {
    response.innerText = "Mr. Duck is waiting for your problem!";
    return;
  }

  response.innerText = `Mr. Duck heard: "${inputField.value}"`;
  messages.push(inputField.value);
  window.localStorage.setItem("messages", JSON.stringify(messages));
  inputField.value = "";
});

document.getElementById("mrDuck").addEventListener("mouseover", function () {
  this.src = "duck.png";
  console.log("Mr. Duck says: 'Hello there! Need help with some debugging?'");
});

document.getElementById("mrDuck").addEventListener("mouseout", function () {
  this.src = "duck.png";
});

console.log(window.localStorage.getItem("messages"));
