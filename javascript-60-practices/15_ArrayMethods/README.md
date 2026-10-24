# Array Methods (slice, splice, concat, flat, etc.)

Master the difference between mutating methods (splice, reverse, sort) and non-mutating methods (slice, concat, toSorted).


### Mutating vs Non-Mutating Methods

#### Mutating (Modifies original array in-place):
- `splice(start, deleteCount, ...items)`: In-place item insertion/removal
- `sort()`, `reverse()`: Re-orders elements in place
- `push()`, `pop()`, `shift()`, `unshift()`

#### Non-Mutating (Returns a fresh new array):
- `slice(start, end)`: Extracts a sub-array
- `concat(...items)`: Merges arrays
- `flat(depth)`: Flattens nested arrays
- `toSorted()`, `toReversed()`, `toSpliced()` (ES2023 modern immutable methods!)
    
