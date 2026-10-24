// Topic: Variables (var, let, const)

// 1. const for immutable bindings
const siteName = "JS Masterclass";
console.log("Site:", siteName);

// 2. let for values that reassign over time
let score = 10;
score += 5;
console.log("Updated Score:", score);

// 3. Block Scoping demonstration
if (true) {
  let blockScoped = "Hidden outside";
  const pi = 3.14159;
  console.log("Inside block:", blockScoped, pi);
}

// 4. const objects are mutable in properties!
const developer = { name: "Alex", level: "Mid" };
developer.level = "Senior"; // Allowed!
console.log("Developer:", developer);
