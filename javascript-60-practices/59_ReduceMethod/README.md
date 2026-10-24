# Array Reduce Method (.reduce())

Accumulate array elements into a single accumulated result (sum, group-by, histogram, flattened object).


### Array.prototype.reduce()
Executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element:
```js
const result = array.reduce((accumulator, currentValue, index, array) => {
  return nextAccumulator;
}, initialValue);
```

### Power Patterns:
- Summing or finding maximum
- Grouping items by key (group-by)
- Frequency histogram counting
- Flattening data structures
    
