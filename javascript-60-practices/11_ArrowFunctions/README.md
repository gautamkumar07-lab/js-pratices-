# Arrow Functions (ES6)

Master concise arrow syntax, implicit returns, and the crucial distinction of lexical `this` binding.


### Arrow Function Syntax
Introduced in ES6, arrow functions provide a compact syntax and lexical scoping:
```js
// Explicit body
const add = (a, b) => { return a + b; };

// Implicit return (single expression)
const double = x => x * 2;

// Returning an object literal implicitly (wrap in parentheses!)
const makePoint = (x, y) => ({ x, y });
```

### Crucial Distinctions from Normal Functions:
1. **No own `this`**: Inherits `this` from the surrounding lexical scope.
2. **No `arguments` object**: Use rest parameters (`...args`) instead.
3. **Cannot be used as constructors**: Attempting `new ArrowFn()` throws `TypeError`.
    
