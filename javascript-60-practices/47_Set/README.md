# Set Data Structure

Collections of unique values of any type, with O(1) membership testing and array deduplication.


### The Set Object
A collection of values where **each value may occur only once**.

### Key Methods:
- `set.add(value)`: Adds value (returns set for chaining).
- `set.has(value)`: O(1) membership check.
- `set.delete(value)`: Removes element.
- `set.size`: Number of elements.

### Array Deduplication:
```js
const unique = [...new Set(arrayWithDuplicates)];
```
    
