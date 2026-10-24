# Regular Expressions (RegExp, Flags, Groups)

Pattern matching with RegExp syntax, flags (g, i, m, s, u), named capture groups, and regex testing.


### Regular Expressions in JavaScript
Used for pattern searching, validation, and string replacement.

### Flags:
- `g`: global (all matches)
- `i`: case-insensitive
- `m`: multi-line (^ and $ match line starts/ends)
- `s`: dotAll (. matches newline)

### Key Methods:
- `regex.test(str)`: Returns boolean.
- `str.match(regex)` / `str.matchAll(regex)`: Extracts matches.
- `str.replace(regex, replacer)`: Replaces matches.
- **Named Capturing Groups**: `(?<name>pattern)`
    
