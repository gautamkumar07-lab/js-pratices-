// Topic: DOM Selectors (querySelector, getElementById)

// Modern DOM Selector demonstrations
console.log("Root container lookup:");
const root = document.getElementById("root");
console.log("Root element tag:", root ? root.tagName : "Not found in headless");

// querySelector with complex CSS selector
const button = document.querySelector("button[type='button'], button");
console.log("First button found:", button ? button.textContent : "None on page");

// NodeList iteration
const allDivs = document.querySelectorAll("div");
console.log(`Total divs on page: ${allDivs.length}`);
// NodeList has native forEach:
allDivs.forEach((div, idx) => {
  if (idx < 3) console.log(`Div #${idx} className:`, div.className);
});
