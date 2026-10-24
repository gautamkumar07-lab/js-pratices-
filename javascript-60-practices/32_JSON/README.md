# JSON (parse, stringify, replacers, revivers)

JavaScript Object Notation: serialization, reviver parsing, replacer filters, and formatting indentation.


### JavaScript Object Notation (JSON)
JSON is a language-independent text format derived from JavaScript object syntax.

### What JSON does NOT support:
- Functions
- `undefined` (omitted from objects, converted to `null` in arrays)
- `Symbol`
- Circular references (throws `TypeError`)
- `BigInt` (throws `TypeError`)
- `Date` (serialized to ISO string, parsed back as plain string)

### Advanced Signatures:
- `JSON.stringify(value, replacer, space)`
- `JSON.parse(text, reviver)`
    
