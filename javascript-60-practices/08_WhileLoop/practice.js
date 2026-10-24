// Topic: While Loop

// Generating powers of 2 up to 1024
let current = 1;
const powers = [];

while (current <= 1024) {
  powers.push(current);
  current *= 2; // Step towards termination
}

console.log("Powers of 2:", powers);

// Simulating queue processing
const tasks = ["Initialize DB", "Load Config", "Mount UI"];
while (tasks.length > 0) {
  const currentTask = tasks.shift();
  console.log("Processing task:", currentTask);
}
