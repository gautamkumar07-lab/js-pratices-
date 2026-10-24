# Callbacks (Synchronous vs Asynchronous)

Passing functions as arguments, understanding synchronous execution vs asynchronous event queue dispatching.


### What is a Callback?
A callback is simply a function passed into another function as an argument, invoked to complete a routine or action.

### Synchronous Callbacks:
Executed immediately on the call stack:
- `[1, 2, 3].map(x => x * 2)`
- `[1, 2, 3].forEach(fn)`

### Asynchronous Callbacks:
Deferred to the event loop task queue:
- `setTimeout(fn, 1000)`
- `addEventListener('click', fn)`
- Node.js `fs.readFile(path, (err, data) => ...)`
    
