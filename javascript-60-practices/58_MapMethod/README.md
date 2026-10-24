# Array Map Method (.map())

Transform every element of an array 1-to-1 into a new array of the same length without mutation.


### Array.prototype.map()
Creates a new array populated with the results of calling a provided function on every element in the calling array:
```js
const transformed = array.map((item, index, array) => newItem);
```
- Guarantees the resulting array has the **exact same length** as the original.
- Non-mutating (pure functional transformation).
    
