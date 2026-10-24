# Promises (States, Chaining, Combinators)

Master Promise states (pending, fulfilled, rejected), chaining, and combinators (all, allSettled, race, any).


### What is a Promise?
An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.

### The 3 States:
1. **Pending**: Initial state, neither fulfilled nor rejected.
2. **Fulfilled**: Operation completed successfully (`resolve(value)`).
3. **Rejected**: Operation failed (`reject(error)`).

### Promise Combinators:
- `Promise.all([p1, p2])`: Fails fast if ANY promise rejects.
- `Promise.allSettled([p1, p2])`: Waits for all to finish, returning array of outcomes.
- `Promise.race([p1, p2])`: Returns the first settled (fulfilled OR rejected).
- `Promise.any([p1, p2])`: Returns the first fulfilled promise (ignores rejections unless all reject).
    
