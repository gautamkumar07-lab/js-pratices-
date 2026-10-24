// Topic: Async / Await (Sequential vs Concurrent)

// Concurrent Execution Pattern
const sleep = (ms, val) => new Promise(res => setTimeout(() => res(val), ms));

async function runDemo() {
  const start = performance.now();

  console.log("Starting concurrent fetches...");
  // Launch both tasks in parallel
  const promiseA = sleep(100, "Data A");
  const promiseB = sleep(100, "Data B");

  // Wait for both concurrently
  const [resA, resB] = await Promise.all([promiseA, promiseB]);
  
  const elapsed = Math.round(performance.now() - start);
  console.log(`Results: ${resA}, ${resB} in ${elapsed}ms (Parallel!)`);
}

await runDemo();
