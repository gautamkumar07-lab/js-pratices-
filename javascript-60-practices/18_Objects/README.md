# Objects (Literals, Properties, References)

Key-value maps in JavaScript: property access (dot vs bracket), computed keys, and reference equality.


### JavaScript Objects
Objects are collections of key-value pairs where keys are strings or Symbols.

### Accessing Properties:
1. **Dot Notation** (`obj.name`): Fast and readable, but requires valid identifier names.
2. **Bracket Notation** (`obj["name"]`): Supports dynamic expressions, spaces, and reserved words.

### Computed Property Names (ES6):
```js
const dynamicKey = "userId";
const user = { [dynamicKey]: 101 };
```
    
