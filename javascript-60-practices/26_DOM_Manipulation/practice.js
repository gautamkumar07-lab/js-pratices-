// Topic: DOM Manipulation (createElement, classList, innerHTML)

// Safe programmatic DOM construction
const container = document.createElement("div");
container.className = "p-4 bg-slate-900 rounded-lg shadow-md";

// Create title with safe textContent
const title = document.createElement("h3");
title.textContent = "Dynamic Node Created!";
title.className = "text-emerald-400 font-bold text-lg";

// Create badge with classList toggle
const badge = document.createElement("span");
badge.textContent = "Active";
badge.classList.add("px-2", "py-0.5", "text-xs", "bg-emerald-500/20", "text-emerald-300", "rounded");

// Assemble elements
container.append(title, badge);

console.log("Constructed HTML preview:");
console.log(container.outerHTML);
