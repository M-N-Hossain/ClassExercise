export class Cat {
  constructor(name, color, breed) {
    this.name = name;
    this.color = color;
    this.breed = breed;
  }

  printInfo() {
    console.log(
      "The cat name is " +
        this.name +
        " and the color is: " +
        this.color +
        " and the breed is: " +
        this.breed
    );
  }
  changeName(newName) {
    this.name = newName;
  }
}
