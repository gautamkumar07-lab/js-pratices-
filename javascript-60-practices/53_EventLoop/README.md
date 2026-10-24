# The Event Loop (Call Stack, Task & Microtask Queues)

The single-threaded runtime engine: Call Stack, Web APIs, Microtask Queue (Promises), and Macrotask Queue (Timers).


### How the JavaScript Runtime Works
JavaScript is single-threaded: it has one call stack and executes one command at a time.

### Execution Priority:
1. **Call Stack**: Executes synchronous code until empty.
2. **Microtask Queue**: Drained **completely** after the call stack clears, before ANY macrotask or browser paint. Includes:
   - Promise callbacks (`.then`, `.catch`, `await` continuations)
   - `queueMicrotask()`
   - `MutationObserver`
3. **Macrotask Queue (Task Queue)**: Runs **one task**, then checks microtasks again! Includes:
   - `setTimeout`, `setInterval`
   - I/O events, DOM events, `setImmediate`
    
