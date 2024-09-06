const button = document.querySelector(".btn");
const message = document.querySelector(".message");

button.addEventListener("mouseover", function () {
  message.classList.add("visible");
});

button.addEventListener("mouseout", function () {
  message.classList.remove("visible");
});
