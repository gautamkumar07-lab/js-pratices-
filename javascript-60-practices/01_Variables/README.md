# Variables (var, let, const)

Master how JavaScript stores data in memory using modern block-scoped declarations.


### What are Variables in JavaScript?
Variables are named identifiers that hold references to values in memory. JavaScript has three declaration keywords:

1. **`const` (Constant)**: Block-scoped, cannot be reassigned or re-declared. Must be initialized upon declaration. Objects declared with `const` can still have their properties mutated!
2. **`let` (Mutable variable)**: Block-scoped, can be reassigned but not re-declared in the same scope. Introduced in ES6 (2015).
3. **`var` (Legacy variable)**: Function-scoped or global, hoisted with `undefined`, permits accidental re-declarations and window pollution. **Avoid in modern JavaScript.**

### The Temporal Dead Zone (TDZ)
Variables declared with `let` and `const` exist in the TDZ from the start of the block until the line of initialization is executed. Accessing them beforehand throws a `ReferenceError`.
    
