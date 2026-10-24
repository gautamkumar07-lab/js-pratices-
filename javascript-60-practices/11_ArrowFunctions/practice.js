// Topic: Arrow Functions (ES6)

// 1. Implicit return syntax
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(n => n * n);
console.log("Squares:", squares);

// 2. Returning object literal implicitly
const createUser = (id, username) => ({ id, username, active: true });
console.log("User:", createUser(101, "dev_guru"));

// 3. Lexical 'this' demonstration
const timer = {
  seconds: 0,
  start() {
    // Arrow function captures 'this' from timer.start()
    const tick = () => {
      this.seconds++;
      console.log("Timer seconds:", this.seconds);
    };
    tick();
  }
};
timer.start();
