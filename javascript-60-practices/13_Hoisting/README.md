# Hoisting & Temporal Dead Zone (TDZ)

Demystify JavaScript execution phases: memory creation vs code execution.


### How JavaScript Hoisting Works
During the compilation / creation phase before running code:
1. **Function Declarations**: Hoisted with their full definition and ready to call.
2. **`var` variables**: Hoisted and initialized with `undefined`.
3. **`let` and `const` variables**: Hoisted into the **Temporal Dead Zone (TDZ)** without initialization. Accessing them throws `ReferenceError`.
4. **Class Declarations**: Hoisted into the TDZ (cannot be used before declaration).
    
