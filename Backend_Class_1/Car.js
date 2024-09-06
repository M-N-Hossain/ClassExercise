export class Car {
  isRunning = false;
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarInfo() {
    console.log(
      "The car is a " +
        this.model +
        " built in " +
        this.year +
        " and made by " +
        this.make
    );
  }

  start() {
    this.isRunning = true;
    console.log("the car has started");
  }

  stop() {
    this.isRunning = false;
    console.log("the car has stopped");
  }
}
