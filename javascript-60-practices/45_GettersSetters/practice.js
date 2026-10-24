// Topic: Getters and Setters (Accessor Properties)

class Temperature {
  #celsius = 0;

  constructor(celsius) {
    this.celsius = celsius;
  }

  // Getter for Celsius
  get celsius() {
    return this.#celsius;
  }

  // Setter with validation
  set celsius(value) {
    if (value < -273.15) {
      throw new RangeError("Temperature cannot be below absolute zero (-273.15°C)");
    }
    this.#celsius = value;
  }

  // Computed Fahrenheit getter
  get fahrenheit() {
    return (this.#celsius * 9) / 5 + 32;
  }

  // Fahrenheit setter
  set fahrenheit(val) {
    this.celsius = ((val - 32) * 5) / 9;
  }
}

const temp = new Temperature(25);
console.log("Celsius:", temp.celsius);
console.log("Fahrenheit:", temp.fahrenheit);

temp.fahrenheit = 212; // Updates celsius behind the scenes!
console.log("Boiling in Celsius:", temp.celsius);
