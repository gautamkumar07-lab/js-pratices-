# WeakSet (Object Tagging without Leaks)

Collections of uniquely held objects with weak references, ideal for tagging objects or tracking state.


### What is a WeakSet?
A set that:
1. Stores **only objects**.
2. Holds objects **weakly** (does not prevent garbage collection).
3. Is **not iterable** and has no `.size` property.

### Typical Use Case:
- "Tagging" or branding objects (e.g. marking which requests have already been processed or which DOM nodes have been decorated) without preventing their cleanup.
    
