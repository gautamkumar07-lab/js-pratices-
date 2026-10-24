// Topic: Hoisting & Temporal Dead Zone (TDZ)

// 1. var hoisting (initialized to undefined)
console.log("var before init:", declaredWithVar); // undefined (not error!)
var declaredWithVar = "Now assigned";

// 2. Function declaration hoisting (completely ready)
console.log("sayHello():", sayHello("World")); // "Hello, World!"
function sayHello(name) {
  return `Hello, ${name}!`;
}

// 3. let / const in TDZ
try {
  // Accessing TDZ variable
  // @ts-ignore
  console.log(declaredWithLet);
  let declaredWithLet = "TDZ Value";
} catch (err) {
  console.log("Caught expected TDZ Error:", err.message);
}
