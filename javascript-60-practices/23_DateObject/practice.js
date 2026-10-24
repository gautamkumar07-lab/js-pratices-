// Topic: Date Object & Time Formatting

// Current date and timestamp
const now = new Date();
console.log("Current ISO:", now.toISOString());
console.log("Unix Timestamp (ms):", Date.now());

// Creating specific date (Watch out: Month 9 = October!)
const halloween = new Date(2026, 9, 31, 18, 30);
console.log("Halloween Date:", halloween.toDateString());

// Intl.DateTimeFormat for clean localized formatting
const formatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
});

console.log("Formatted:", formatter.format(now));

// Calculate difference in days
const past = new Date(2026, 0, 1);
const diffDays = Math.floor((now.getTime() - past.getTime()) / (1000 * 60 * 60 * 24));
console.log(`Days since Jan 1, 2026: ${diffDays} days`);
