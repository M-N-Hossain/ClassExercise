const button = document.querySelector(".btn");
const inputFld = document.querySelector(".inputFld");
const list = document.querySelector(".list");

button.addEventListener("click", () => {
  if (inputFld.value.trim() === "") return;
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "delete";

  li.innerText = inputFld.value;
  li.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    list.removeChild(li);
  });

  list.appendChild(li);
  inputFld.value = "";
  inputFld.focus();
});
