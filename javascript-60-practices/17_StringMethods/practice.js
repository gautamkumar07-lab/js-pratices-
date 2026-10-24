// Topic: String Methods (trim, slice, replaceAll, split)

const rawInput = "   learn-javascript-step-by-step   ";
const clean = rawInput.trim();
console.log("Cleaned:", clean);

// Replace / replaceAll
const slug = clean.replaceAll("-", " ");
console.log("Replaced slug:", slug);

// Split into words
const words = slug.split(" ");
console.log("Words array:", words);

// Formatting with padStart
const invoiceId = "42".padStart(6, "0");
console.log("Invoice Code:", `INV-${invoiceId}`);

// Checking prefixes and suffixes
const filename = "app-bundle.production.js";
console.log("Is JS file:", filename.endsWith(".js"));
console.log("Has bundle tag:", filename.includes("bundle"));
