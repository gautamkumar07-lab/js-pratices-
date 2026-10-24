# Object Methods (keys, values, entries, freeze)

Master standard static Object utilities: Object.keys, values, entries, fromEntries, freeze, and seal.


### Static Object Utilities
- `Object.keys(obj)`: Returns array of enumerable string property names.
- `Object.values(obj)`: Returns array of enumerable property values.
- `Object.entries(obj)`: Returns `[key, value]` pairs (great for loops!).
- `Object.fromEntries(pairs)`: Converts `[key, value]` pairs back into an object.
- `Object.freeze(obj)`: Makes object shallowly immutable (prevents adding, deleting, or editing properties).
- `Object.seal(obj)`: Prevents adding/deleting properties, but allows modifying existing ones.
    
