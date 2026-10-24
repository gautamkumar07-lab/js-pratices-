// Topic: Data Types (Primitives & Reference)

// Primitive Types
const count = 42;
const greeting = "Hello, World!";
const isDev = true;
const unassigned = undefined;
const empty = null;
const bigNumber = 9007199254740991n;
const idSymbol = Symbol("user_id");

console.log("typeof count:", typeof count);
console.log("typeof greeting:", typeof greeting);
console.log("typeof isDev:", typeof isDev);
console.log("typeof unassigned:", typeof unassigned);
console.log("typeof empty (historical JS bug):", typeof empty);
console.log("typeof bigNumber:", typeof bigNumber);
console.log("typeof idSymbol:", typeof idSymbol);

// Reference Type Check
const list = [1, 2, 3];
console.log("Array is Array:", Array.isArray(list));
console.log("typeof list:", typeof list);
