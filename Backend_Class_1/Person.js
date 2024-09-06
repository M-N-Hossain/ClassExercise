export class Person {
  constructor(firstName, hobby) {
    this.firstName = firstName;
    this.hobby = hobby;
  }

  greet() {
    console.log(
      "Hello, my name is " + this.firstName + " and I love " + this.hobby
    );
  }
}
