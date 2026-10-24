# setInterval & Recurring Execution

Repeated interval execution, clearInterval cleanup, drift accumulation, and recursive setTimeout alternative.


### setInterval Mechanics
Repeatedly calls a function with a fixed time delay between each call:
```js
const intervalId = setInterval(callback, delayMs);
clearInterval(intervalId); // Essential for preventing memory leaks!
```

### The Drift Problem & Recursive setTimeout:
If the execution time of `callback` takes longer than the interval delay, intervals can stack up or suffer severe timing drift.
**Superior Pattern**: Recursive `setTimeout` ensures the next delay only starts AFTER the previous task finishes!
    
