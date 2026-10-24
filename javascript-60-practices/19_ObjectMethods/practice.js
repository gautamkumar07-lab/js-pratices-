// Topic: Object Methods (keys, values, entries, freeze)

const prices = { apple: 1.5, banana: 0.8, cherry: 3.2 };

console.log("Keys:", Object.keys(prices));
console.log("Values:", Object.values(prices));
console.log("Entries:", Object.entries(prices));

// Transform object entries (e.g. 20% discount)
const discounted = Object.fromEntries(
  Object.entries(prices).map(([fruit, price]) => [fruit, +(price * 0.8).toFixed(2)])
);
console.log("Discounted Prices:", discounted);

// Object.freeze
const config = Object.freeze({ timeout: 5000 });
// config.timeout = 10000; // Fails silently or throws TypeError in strict mode!
console.log("Frozen config:", config);
