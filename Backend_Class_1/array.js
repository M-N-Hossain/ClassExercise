const names = ["Nayeem", "Hossain", "Christen", "Mark", "John"];
// console.log(names[0]);
// console.log(names.indexOf("Nayeem"))
// console.log(names.indexOf("Andrea")); // -1

names.push("Andrea");
// console.log(names);

const newArrayOfNames = names.slice(0, 3);
// console.log(newArrayOfNames);

const person1 = {
  firstName: "Nayeem",
  lastname: "Hossain",
  email: "a@a.com",
};

const person2 = {
  firstName: "Christen",
  lastname: "Hossain",
  email: "b@b.com",
};

const persons = [person1, person2];
console.log(persons);
console.log(person1.email);
