# The `this` Keyword & Execution Context

Master dynamic `this` binding: default binding, implicit method binding, explicit binding, and arrow lexical binding.


### The 4 Rules of `this` Determination:

1. **Default Binding**: Standalone function call -> `undefined` in strict mode, or `window`/`global` in non-strict mode.
2. **Implicit Binding**: Called as an object method (`obj.fn()`) -> `this` points to the object preceding the dot.
3. **Explicit Binding**: Invoked via `.call()`, `.apply()`, or `.bind()` -> `this` is explicitly specified.
4. **`new` Binding**: Called with `new Constructor()` -> `this` is the newly instantiated object.

*Special Rule*: **Arrow functions have NO own `this`**; they capture `this` lexically from their enclosing scope.
    
