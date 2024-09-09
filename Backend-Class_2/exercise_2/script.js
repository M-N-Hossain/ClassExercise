const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
  { title: "Moby-Dick", author: "Herman Melville" },
];

function addingBookToTheBookList(arr) {
  const list = document.querySelector(".list");
  arr.forEach((element) => {
    const li = document.createElement("li");
    li.innerText = element.title + " by " + element.author;
    list.appendChild(li);
  });
}
addingBookToTheBookList(books);


