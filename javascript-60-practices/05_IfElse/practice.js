// Topic: If...Else & Ternary Operator

// 1. Guard Clause pattern (Clean code)
function calculateDiscount(user) {
  if (!user) return 0;
  if (user.isVIP) return 0.25;
  if (user.purchases > 10) return 0.15;
  return 0.05;
}

console.log("VIP Discount:", calculateDiscount({ isVIP: true, purchases: 2 }));
console.log("Regular Discount:", calculateDiscount({ isVIP: false, purchases: 12 }));

// 2. Ternary Operator Expression
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log("Status:", status);
