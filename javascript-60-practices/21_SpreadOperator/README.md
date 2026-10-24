# Spread Operator (...)

Expand iterables into individual elements: array cloning, object merging, and function arguments.


### The Spread Operator (`...`)
Expands an iterable (like an array or string) or an object's enumerable properties into a receiver.

### Common Uses:
1. **Shallow Copying**: `const copy = [...arr];` or `const clone = { ...obj };`
2. **Merging**: `const combined = [...list1, ...list2];`
3. **Overriding Properties**: Later properties in object spreads overwrite earlier ones.
4. **Passing Array as Arguments**: `Math.max(...numbers);`
    
