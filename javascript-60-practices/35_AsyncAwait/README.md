# Async / Await (Sequential vs Concurrent)

Write clean synchronous-looking asynchronous code, master sequential vs parallel execution, and error handling.


### Async / Await Mechanics
- An `async` function **always** returns a Promise.
- `await` pauses execution of the async function until the Promise settles.
- It can only be used inside `async` functions or top-level ES modules.

### Sequential vs Concurrent Execution:
```js
// BAD: Sequential (Takes 2 + 2 = 4 seconds!)
const a = await fetchA();
const b = await fetchB();

// GOOD: Concurrent (Takes only 2 seconds!)
const [a, b] = await Promise.all([fetchA(), fetchB()]);
```
    
