// Topic: Destructuring (Objects & Arrays)

// 1. Object Destructuring with Aliasing & Defaults
const settings = {
  theme: "dark",
  fontSize: 16
};

const { theme, fontSize, showSidebar = true, theme: currentTheme } = settings;
console.log("Theme:", theme, "FontSize:", fontSize, "Sidebar:", showSidebar);

// 2. Swapping variables without temporary variable!
let a = "First", b = "Second";
[a, b] = [b, a];
console.log("Swapped:", { a, b });

// 3. Destructuring function parameters
function renderCard({ title, likes = 0, author: { name = "Anonymous" } = {} }) {
  return `Card: "${title}" by ${name} (${likes} likes)`;
}

console.log(renderCard({ title: "Mastering JS", author: { name: "Taylor" }, likes: 45 }));
