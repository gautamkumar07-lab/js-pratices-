# Getters and Setters (Accessor Properties)

Encapsulate properties, validate incoming assignments, and compute values dynamically using get and set.


### Accessor Properties: `get` and `set`
Getters and setters bind an object property to a function that is invoked when that property is accessed or assigned:
- **`get prop()`**: Computes property on the fly without parenthesised invocation.
- **`set prop(val)`**: Intercepts writes for validation, sanitization, or reactive triggering.
    
