// Topic: Array Methods (slice, splice, concat, flat, etc.)

const original = [10, 20, 30, 40, 50];

// 1. slice: non-mutating extract
const sliced = original.slice(1, 4);
console.log("slice(1, 4):", sliced);
console.log("Original untouched:", original);

// 2. splice: mutating modification
const removed = original.splice(2, 1, 999);
console.log("splice removed:", removed);
console.log("Original after splice:", original);

// 3. Modern ES2023 toSorted (Immutable sort)
const unsorted = [5, 1, 8, 3];
const sorted = unsorted.toSorted((a, b) => a - b);
console.log("Original unsorted:", unsorted);
console.log("New sorted array:", sorted);
