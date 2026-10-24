# setTimeout & Timers

Schedule delayed execution, manage timer IDs, clearTimeout cancellation, and event loop minimum delays.


### setTimeout Mechanics
Schedules a task to run after a minimum delay in milliseconds:
```js
const timerId = setTimeout(callback, delayMs, ...args);
clearTimeout(timerId); // Cancels the timer!
```

### Crucial Truth: Minimum Delay, NOT Exact Time!
The delay is a **minimum threshold**. If the JavaScript call stack is busy executing a heavy task, the callback waits in the task queue until the stack clears!
    
