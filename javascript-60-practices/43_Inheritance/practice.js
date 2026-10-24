// Topic: Inheritance & `super` Keyword

class Vehicle {
  constructor(speed) {
    this.speed = speed;
  }

  move() {
    return `Moving at ${this.speed} km/h`;
  }
}

class Airplane extends Vehicle {
  constructor(speed, altitude) {
    super(speed); // Call parent constructor
    this.altitude = altitude;
  }

  // Method override with super call
  move() {
    return `${super.move()} at an altitude of ${this.altitude} meters!`;
  }
}

const jet = new Airplane(850, 10000);
console.log(jet.move());
console.log("Is Airplane:", jet instanceof Airplane);
console.log("Is Vehicle:", jet instanceof Vehicle);
