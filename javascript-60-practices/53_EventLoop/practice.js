// Topic: The Event Loop (Call Stack, Task & Microtask Queues)

// The classic Event Loop execution order test
console.log("1. Synchronous Start");

setTimeout(() => {
  console.log("5. Macrotask (setTimeout 0ms)");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Microtask 1 (Promise.then)");
}).then(() => {
  console.log("4. Microtask 2 (Chained Promise)");
});

queueMicrotask(() => {
  console.log("3b. Microtask queueMicrotask()");
});

console.log("2. Synchronous End");

// Execution Order:
// 1. Synchronous Start
// 2. Synchronous End
// 3. Microtask 1
// 3b. Microtask queueMicrotask()
// 4. Microtask 2
// 5. Macrotask
