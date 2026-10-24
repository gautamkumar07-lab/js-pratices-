# Strings (Literals, Templates, Immutability)

Understand JavaScript string primitives, UTF-16 character encoding, immutability, and ES6 template literals.


### Strings in JavaScript
Strings are primitive values representing text. Once created, individual characters in a string **cannot be mutated**:
```js
let str = "Hello";
str[0] = "J"; // Silent fail or error in strict mode!
console.log(str); // Still "Hello"
```

### Template Literals (```)
- Multi-line text support without `\n`
- Expression interpolation with `${expression}`
- Tagged templates for advanced sanitization
    
