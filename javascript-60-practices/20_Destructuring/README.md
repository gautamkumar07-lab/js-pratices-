# Destructuring (Objects & Arrays)

Unpack values from arrays or properties from objects with default values, aliases, and nested patterns.


### Destructuring Syntax
Destructuring allows extracting multiple variables cleanly in a single statement.

#### 1. Object Destructuring:
```js
const { name, role = "Guest", age: userAge } = user;
```
- Renaming: `age: userAge` assigns property `age` to variable `userAge`.
- Default value: `role = "Guest"` used if property is `undefined`.

#### 2. Array Destructuring:
```js
const [first, second, ...rest] = items;
```
- Skips items: `const [a, , c] = [1, 2, 3];`
- Swapping variables: `[x, y] = [y, x];`
    
