// Topic: Array Map Method (.map())

const users = [
  { id: 1, firstName: "Grace", lastName: "Hopper", role: "admin" },
  { id: 2, firstName: "Ada", lastName: "Lovelace", role: "developer" },
  { id: 3, firstName: "Alan", lastName: "Turing", role: "scientist" }
];

// Transform user objects into formatted strings
const displayNames = users.map(u => `${u.lastName.toUpperCase()}, ${u.firstName} [${u.role}]`);
console.log("Display Names:", displayNames);

// Extract just the IDs
const userIds = users.map(u => u.id);
console.log("User IDs:", userIds);

// The classic parseInt gotcha!
console.log("Bug with map(parseInt):", ["1", "2", "3"].map(parseInt)); // [1, NaN, NaN]
console.log("Fixed with map(Number):", ["1", "2", "3"].map(Number));   // [1, 2, 3]
