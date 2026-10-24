# Array Filter Method (.filter())

Declaratively filter elements matching a boolean predicate without mutating the original array.


### Array.prototype.filter()
Creates a **shallow copy** of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided callback:
```js
const passing = array.filter((element, index, array) => booleanTest);
```
- Always returns a **new array**.
- Never mutates the original array.
- Skips empty slots in sparse arrays.
    
