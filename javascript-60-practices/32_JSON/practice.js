// Topic: JSON (parse, stringify, replacers, revivers)

// 1. Pretty printing with indentation
const project = {
  name: "JS 60 Roadmap",
  version: "1.0.0",
  tags: ["javascript", "web", "interactive"],
  createdAt: new Date()
};

const prettyJson = JSON.stringify(project, null, 2);
console.log("Pretty JSON:
" + prettyJson);

// 2. Custom Replacer: Filter out sensitive keys
const secureJson = JSON.stringify(
  { username: "john", secretToken: "xyz123", email: "j@j.com" },
  (key, value) => (key === "secretToken" ? undefined : value)
);
console.log("Filtered JSON:", secureJson);

// 3. Custom Reviver: Automatically parse Dates
const raw = '{"event":"Conference","date":"2026-10-23T12:00:00.000Z"}';
const parsed = JSON.parse(raw, (key, value) => {
  if (key === "date") return new Date(value);
  return value;
});
console.log("Parsed Date object is Date:", parsed.date instanceof Date);
