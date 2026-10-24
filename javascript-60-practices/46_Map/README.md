# Map Data Structure

Keyed collections where keys can be ANY type (objects, functions, primitives), with guaranteed insertion order and .size.


### Map vs Plain Object

| Feature | Map | Plain Object |
| :--- | :--- | :--- |
| **Key Types** | Any value (objects, functions, numbers, primitives) | Strings and Symbols only |
| **Size** | Fast `map.size` property | `Object.keys(obj).length` |
| **Key Order** | Guaranteed insertion order | Mostly insertion order (arbitrary for numbers) |
| **Direct Iteration** | Iterable directly with `for...of` | Requires `Object.entries()` |
| **Performance** | Optimized for frequent addition/deletion | Optimized for structured records |
    
