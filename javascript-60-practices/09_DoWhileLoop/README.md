# Do...While Loop

Guaranteed execution of the loop body at least once, testing the condition at the end of each iteration.


### Do...While Loop Mechanics
Unlike the standard `while` loop, `do...while` tests its condition **after** executing the block. This guarantees that the loop runs **at least once**, regardless of whether the condition was initially true.

### Common Use Cases:
- Interactive prompts / input validation (ask once, repeat if invalid)
- Retry logic with backoff
- Rolling dice or generating a random number until a condition is met
    
