# Scope (Global, Function, Block, Lexical)

Discover how JavaScript resolves identifiers through the scope chain and lexical environment.


### The 4 Scopes in JavaScript:
1. **Global Scope**: Accessible everywhere in the application.
2. **Module Scope**: Accessible within the ES module file.
3. **Function Scope**: Created by functions (variables declared with `var`, `let`, `const`).
4. **Block Scope**: Created by curly braces `{ ... }` (applies to `let` and `const`).

### Lexical Scope (Static Scope)
JavaScript resolves variable lookups based on where functions were **declared** in the source code, NOT where they are invoked!
    
