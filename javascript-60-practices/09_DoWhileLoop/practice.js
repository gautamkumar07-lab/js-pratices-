// Topic: Do...While Loop

// Guaranteed at least one roll
let rollCount = 0;
let diceRoll;

do {
  rollCount++;
  diceRoll = Math.floor(Math.random() * 6) + 1;
  console.log(`Roll #${rollCount}: rolled a ${diceRoll}`);
} while (diceRoll !== 6 && rollCount < 10);

console.log(`Finished! Got a 6 in ${rollCount} roll(s).`);

// Difference between while vs do...while with initially false condition:
let testVal = 100;
do {
  console.log("do...while ran once even though 100 < 10 is false!");
} while (testVal < 10);
