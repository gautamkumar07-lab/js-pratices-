// Topic: Rest Operator / Parameters (...)

// 1. Rest Parameters in functions
function sumAll(...numbers) {
  // 'numbers' is a real array!
  return numbers.reduce((total, n) => total + n, 0);
}

console.log("Sum:", sumAll(10, 20, 30, 40));

// 2. Destructuring with Rest
const [lead, assistant, ...teamMembers] = ["Alice", "Bob", "Charlie", "David", "Emma"];
console.log("Lead:", lead);
console.log("Team:", teamMembers);

// 3. Omitting sensitive keys with Object rest
const userRecord = {
  id: 42,
  username: "johndoe",
  passwordHash: "secret_salt_xyz",
  email: "john@example.com"
};

// Separate passwordHash and collect the rest
const { passwordHash, ...publicProfile } = userRecord;
console.log("Public Profile (sanitized):", publicProfile);
