// Topic: Strings (Literals, Templates, Immutability)

// String literals & Immutability
let greeting = "JavaScript";
greeting[0] = "Y"; // Doesn't modify primitive string!
console.log("Greeting:", greeting);

// Template Literals & Multi-line
const user = { name: "Alex", role: "Architect", years: 7 };
const bio = `Profile Summary:
- Name: ${user.name}
- Role: ${user.role}
- Experience: ${user.years * 12} months
- Status: ${user.years >= 5 ? "Senior" : "Junior"}`;

console.log(bio);
