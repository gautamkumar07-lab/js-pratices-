// Topic: Set Data Structure

// 1. Array Deduplication in one line
const tags = ["javascript", "react", "css", "javascript", "react", "typescript"];
const uniqueTags = [...new Set(tags)];
console.log("Unique tags:", uniqueTags);

// 2. High-performance O(1) membership checking
const bannedUserIds = new Set([104, 209, 312, 999]);

function isUserAllowed(id) {
  return !bannedUserIds.has(id);
}

console.log("Is user 104 allowed:", isUserAllowed(104));
console.log("Is user 450 allowed:", isUserAllowed(450));

// 3. Set Operations (Union, Intersection)
const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4]);

const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log("Intersection:", [...intersection]);
