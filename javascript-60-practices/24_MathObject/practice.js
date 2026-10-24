// Topic: Math Object & Numeric Operations

// Rounding differences with positive and negative numbers
const val = 4.7;
const neg = -4.7;

console.log("Math.floor(4.7):", Math.floor(val));   // 4
console.log("Math.floor(-4.7):", Math.floor(neg));  // -5
console.log("Math.trunc(-4.7):", Math.trunc(neg));  // -4 (just chops decimals)

// Reusable Random Range helper function [min, max] inclusive
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomRolls = Array.from({ length: 5 }, () => getRandomInt(1, 20));
console.log("5 D20 Dice rolls:", randomRolls);

// Clamping a number between min and max
const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
console.log("Clamped 150 (max 100):", clamp(150, 0, 100));
console.log("Clamped -20 (min 0):", clamp(-20, 0, 100));
