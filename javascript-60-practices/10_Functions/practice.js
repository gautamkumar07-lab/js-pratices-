// Topic: Functions (Declarations vs Expressions)

// 1. Function Declaration (Hoisted!)
console.log("Hoisted call:", square(4)); // Works!

function square(n) {
  return n * n;
}

// 2. Default Parameters
function createGreeting(name = "Guest", role = "Viewer") {
  return `Welcome ${name}, you have ${role} access.`;
}

console.log(createGreeting());
console.log(createGreeting("Taylor", "Admin"));

// 3. Passing functions as arguments (First-class functions)
function executeOperation(a, b, operation) {
  return operation(a, b);
}

const multiply = (x, y) => x * y;
console.log("Multiply result:", executeOperation(6, 7, multiply));
