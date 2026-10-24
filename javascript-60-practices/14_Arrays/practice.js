// Topic: Arrays (Creation, Indexing, Mutability)

// Array creation and indexing
const fruits = ["Apple", "Banana", "Cherry"];
console.log("Length:", fruits.length);
console.log("First fruit:", fruits[0]);
console.log("Last fruit (at(-1)):", fruits.at(-1));

// Common Mutating methods: push, pop, unshift, shift
fruits.push("Dragonfruit");   // Adds to end
fruits.unshift("Avocado");    // Adds to front
console.log("After additions:", fruits);

const removedLast = fruits.pop();   // Removes from end
const removedFirst = fruits.shift(); // Removes from front
console.log("Removed:", { removedFirst, removedLast });
console.log("Current array:", fruits);
