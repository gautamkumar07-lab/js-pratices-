// Topic: For Loop (Classic, for...of, for...in)

// 1. Classic indexed loop
const techStack = ["React", "TypeScript", "Tailwind", "Node"];
for (let i = 0; i < techStack.length; i++) {
  console.log(`[${i}]: ${techStack[i]}`);
}

// 2. Modern for...of loop (Clean array iteration)
console.log("--- for...of values ---");
for (const tech of techStack) {
  console.log("Technology:", tech);
}

// 3. for...in for object properties
const metrics = { cpu: "14%", ram: "4.2GB", status: "Healthy" };
for (const key in metrics) {
  if (Object.hasOwn(metrics, key)) {
    console.log(`Metric ${key}: ${metrics[key]}`);
  }
}
