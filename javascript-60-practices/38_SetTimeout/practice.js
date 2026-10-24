// Topic: setTimeout & Timers

// 1. Basic setTimeout with parameter passing
console.log("1. Starting timer test");

const timerId = setTimeout((greeting, target) => {
  console.log(`3. ${greeting}, ${target}! (Fired after delay)`);
}, 100, "Hello", "Engineers");

console.log("2. Timer registered with ID:", timerId);

// 2. Cancellation with clearTimeout
const cancelableTimer = setTimeout(() => {
  console.log("This will NEVER run!");
}, 500);

clearTimeout(cancelableTimer);
console.log("Canceled second timer successfully.");
