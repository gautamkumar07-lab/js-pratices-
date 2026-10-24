# WeakMap (Garbage Collection & Safe Metadata)

Key-value pairs where keys MUST be objects and are held weakly, enabling automatic garbage collection.


### What is a WeakMap?
A specialized Map where:
1. **Keys MUST be objects** (primitives cannot be keys).
2. **Keys are held weakly**: If there are no other references to the key object, it can be garbage collected even if it is in the WeakMap!
3. **Not iterable**: No `.size`, no `.forEach()`, no `.keys()` (because the garbage collector can reclaim keys at any time).

### Primary Use Cases:
- Associating private metadata with DOM nodes without memory leaks
- Caching/memoization tied to object lifecycles
    
