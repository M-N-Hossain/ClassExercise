const messages = JSON.parse(window.localStorage.getItem("messages")) || [];

const response = document.getElementById("response");

window.addEventListener("load", () => {
  // const userName = prompt("What's your name?");
  // const helloMsg = document.querySelector(".helloMsg");

  // Lisiting the prevMessage
  const list = document.querySelector(".list");
  for (let i = 0; i < messages.length; i++) {
    const li = document.createElement("li");
    li.innerText = messages[i].message;
    li.title = messages[i].time;
    list.appendChild(li);
  }
});

// formating the function as said.
function formatDate() {
  const d = new Date();

  const dd = d.getDate();
  const mm = d.getMonth() + 1;
  const yyyy = d.getFullYear();
  const hh = d.getHours();
  const minutes = d.getMinutes();

  return `${dd}/${mm}/${yyyy}, ${hh}:${minutes}`;
}

// Submit the message functionality
document.getElementById("submitBtn").addEventListener("click", function () {
  const inputField = document.getElementById("problemInput");
  const response = document.getElementById("response");

  if (inputField.value.trim() === "") {
    response.innerText = "Mr. Duck is waiting for your problem!";
    return;
  }

  response.innerText = `Mr. Duck heard: "${inputField.value}"`;
  const timeOfMessage = formatDate();
  messages.push({ message: inputField.value, time: timeOfMessage });
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

document.querySelector(".ansBtn").addEventListener("click", fetchJoke);

async function fetchJoke() {
  const res = await fetch(
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=political,racist,sexist,explicit"
  );
  const data = await res.json();
  response.innerText = data.joke || "try again!";
}
