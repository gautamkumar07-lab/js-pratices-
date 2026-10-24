// Topic: Array Filter Method (.filter())

const products = [
  { id: 1, name: "Keyboard", price: 120, inStock: true },
  { id: 2, name: "Mouse", price: 60, inStock: false },
  { id: 3, name: "Monitor", price: 350, inStock: true },
  { id: 4, name: "USB Cable", price: 15, inStock: true },
  { id: 5, name: "Webcam", price: 80, inStock: false }
];

// Filter available products under $150
const affordableInStock = products.filter(item => item.inStock && item.price <= 150);
console.log("Affordable & In Stock:", affordableInStock);

// Clean up falsy values from an array
const mixedData = ["Alpha", 0, "Beta", "", false, null, undefined, "Gamma"];
const truthyValues = mixedData.filter(Boolean);
console.log("Truthy only:", truthyValues);
