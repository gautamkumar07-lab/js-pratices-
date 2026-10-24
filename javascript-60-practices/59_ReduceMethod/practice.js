// Topic: Array Reduce Method (.reduce())

// 1. Grouping items by category (Group-by pattern)
const inventory = [
  { name: "Bananas", category: "Fruit", price: 1.2 },
  { name: "Carrots", category: "Vegetable", price: 0.9 },
  { name: "Apples", category: "Fruit", price: 2.1 },
  { name: "Broccoli", category: "Vegetable", price: 1.8 }
];

const grouped = inventory.reduce((acc, item) => {
  const cat = item.category;
  if (!acc[cat]) acc[cat] = [];
  acc[cat].push(item.name);
  return acc;
}, {});

console.log("Grouped by Category:", grouped);

// 2. Frequency Counter / Histogram
const votes = ["Yes", "No", "Yes", "Yes", "Abstain", "No"];
const tally = votes.reduce((acc, vote) => {
  acc[vote] = (acc[vote] || 0) + 1;
  return acc;
}, {});

console.log("Vote Tally:", tally);

// 3. Total calculation
const totalCost = inventory.reduce((sum, item) => sum + item.price, 0);
console.log("Total inventory cost: $" + totalCost.toFixed(2));
