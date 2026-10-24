// Topic: Map Data Structure

// Using objects and functions as keys!
const userSessions = new Map();

const user1 = { id: 1, name: "Alice" };
const user2 = { id: 2, name: "Bob" };

userSessions.set(user1, { role: "admin", loggedIn: true });
userSessions.set(user2, { role: "guest", loggedIn: false });

console.log("Map size:", userSessions.size);
console.log("Has user1:", userSessions.has(user1));
console.log("User1 session:", userSessions.get(user1));

// Iterating over a Map
console.log("--- Iterating Map entries ---");
for (const [user, session] of userSessions) {
  console.log(`${user.name} (${session.role})`);
}
