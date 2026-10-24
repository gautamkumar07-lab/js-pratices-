// Topic: Operators (Comparison, Logical, Nullish)

// 1. Strict vs Loose Equality
console.log("0 === false:", 0 === false); // false
console.log("0 == false:", 0 == false);   // true (type coercion)
console.log("null === undefined:", null === undefined); // false
console.log("null == undefined:", null == undefined);   // true

// 2. Logical OR (||) vs Nullish Coalescing (??)
const userConfig = {
  timeout: 0, // 0 is a valid timeout, but falsy!
  theme: ""
};

const badTimeout = userConfig.timeout || 30; // 30 (bug: ignored 0)
const goodTimeout = userConfig.timeout ?? 30; // 0 (correct!)
console.log("Fallback with ||:", badTimeout);
console.log("Fallback with ??:", goodTimeout);

// 3. Optional Chaining
const user = { profile: { name: "Sarah" } };
console.log("City:", user?.profile?.address?.city); // undefined, no crash!
