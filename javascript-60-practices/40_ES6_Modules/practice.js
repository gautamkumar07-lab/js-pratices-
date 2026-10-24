// Topic: ES6 Modules (import, export, tree-shaking)

// Simulating ES Module exports and imports
const mathModule = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  PI: 3.14159265
};

// Emulate named destructuring import
const { add, subtract, PI } = mathModule;
console.log("Named import result:", add(10, 5));
console.log("PI constant:", PI);

// Dynamic import simulation (Code-splitting)
async function loadAnalytics() {
  console.log("Dynamically loading module on demand...");
  // Simulated dynamic import delay
  const analytics = { track: (evt) => console.log(`Tracked event: ${evt}`) };
  analytics.track("PAGE_VIEW");
}

await loadAnalytics();
