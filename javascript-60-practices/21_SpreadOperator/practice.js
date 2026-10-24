// Topic: Spread Operator (...)

// 1. Merging and Overriding Objects
const defaultOptions = { theme: 'light', debug: false, retries: 3 };
const userOptions = { theme: 'dark', retries: 5 };

const finalConfig = {
  ...defaultOptions,
  ...userOptions,
  version: '2.0.0'
};
console.log("Merged Config:", finalConfig);

// 2. Array copying and concatenation
const groupA = ["Alpha", "Beta"];
const groupB = ["Gamma", "Delta"];
const allGroups = ["Pre-Launch", ...groupA, ...groupB, "Post-Launch"];
console.log("All Groups:", allGroups);

// 3. Passing to Math.max
const scores = [88, 94, 76, 99, 91];
console.log("Highest score:", Math.max(...scores));
