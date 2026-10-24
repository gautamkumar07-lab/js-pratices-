// Topic: Constructors & The `new` Keyword

// 1. Class constructor
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.createdAt = new Date();
  }
}

const u1 = new User("Taylor", "taylor@domain.com");
console.log("User instance:", u1);
console.log("Instance of User:", u1 instanceof User);

// 2. Emulating what the 'new' keyword does behind the scenes!
function customNew(ConstructorFn, ...args) {
  // Step 1 & 2: Create object linked to prototype
  const obj = Object.create(ConstructorFn.prototype);
  // Step 3 & 4: Execute constructor with 'this' bound to obj
  const result = ConstructorFn.apply(obj, args);
  return (typeof result === 'object' && result !== null) ? result : obj;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

const myCar = customNew(Car, "Tesla", "Model S");
console.log("Custom created car:", myCar);
console.log("Is Car instance:", myCar instanceof Car);
