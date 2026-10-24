// Topic: Objects (Literals, Properties, References)

// Object literal with computed properties and shorthand
const keyName = "status";
const server = {
  host: "api.cloud.dev",
  port: 8080,
  [keyName]: "online", // Computed property
  getEndpoint() {
    return `https://${this.host}:${this.port}`;
  }
};

console.log("Endpoint:", server.getEndpoint());
console.log("Status via bracket:", server["status"]);

// Reference Equality vs Value Equality
const objA = { x: 1 };
const objB = { x: 1 };
const objC = objA;

console.log("objA === objB:", objA === objB); // false! Different memory references
console.log("objA === objC:", objA === objC); // true! Same reference
