// Topic: Promises (States, Chaining, Combinators)

// 1. Creating a Promise
function delay(ms, message) {
  return new Promise((resolve) => setTimeout(() => resolve(message), ms));
}

// 2. Chaining promises
delay(50, "Step 1 complete")
  .then(res => {
    console.log(res);
    return delay(50, "Step 2 complete");
  })
  .then(res => console.log(res))
  .catch(err => console.error("Chain error:", err));

// 3. Promise.allSettled demonstration
const p1 = Promise.resolve("Success Alpha");
const p2 = Promise.reject(new Error("Failure Beta"));
const p3 = Promise.resolve("Success Gamma");

const results = await Promise.allSettled([p1, p2, p3]);
console.log("allSettled summary:");
results.forEach((r, idx) => {
  console.log(`Promise #${idx}: status=${r.status}, val/reason=`, r.status === 'fulfilled' ? r.value : r.reason.message);
});
