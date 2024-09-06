import { Person } from "./Person.js";

const calculator = {
  firstName: "Md Nayeem",
  lastName: "Hossain",
  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
  areaOfTriangle: function (height, width) {
    const area = (height * width) / 2 + " cm";
    console.log("The area of triangle is: " + area);
  },
  distance: function (speed, time) {
    const x = speed * time;
    console.log("You have travelled " + x + " km");
  },
};

calculator.fullName();
calculator.areaOfTriangle(5, 8);
calculator.distance(20, 5);

// function fullname(firstname, lastname) {
//   console.log(firstname + " " + lastname);
// }
// // fullname("Md Nayeem", "Hossain");

// function areaOfTriangle(height, width) {
//   return (height * width) / 2 + " cm";
// }
// // considering the numbers as cm
// console.log(areaOfTriangle(5, 8));

// function distance(speed, time) {
//   return speed * time;
// }
// // considering speed in km
// console.log("You have travelled " + distance(20, 5) + " km");

const person1 = new Person("Nayeem", "Cricket");
person1.greet();

