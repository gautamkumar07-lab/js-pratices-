# Operators (Comparison, Logical, Nullish)

Master arithmetic, strict vs loose equality, logical short-circuiting, and modern operators like ?? and ?.


### Key JavaScript Operators

1. **Equality**:
   - `===` (Strict): Compares value AND type without coercion. (Always prefer!)
   - `==` (Loose): Coerces types before comparison (e.g. `0 == false` is `true`).

2. **Nullish Coalescing (`??`)**:
   - Returns right-hand side ONLY if left side is `null` or `undefined`.
   - Distinct from `||`, which falls back on any falsy value (`0`, `""`, `false`).

3. **Optional Chaining (`?.`)**:
   - Short-circuits with `undefined` if an intermediate property is nullish, preventing `TypeError: Cannot read properties of undefined`.
    
