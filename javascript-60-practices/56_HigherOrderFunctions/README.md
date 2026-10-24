# Higher-Order Functions & Composition

Functions that take functions as arguments or return functions, enabling declarative, reusable pipelines.


### What is a Higher-Order Function (HOF)?
A function that does at least one of the following:
1. Takes one or more functions as arguments (e.g., `map`, `filter`, `setTimeout`).
2. Returns another function as its result (e.g., function factories, decorators, debounce).

### Function Composition:
Combining two or more functions to produce a new function (`compose(f, g)(x) = f(g(x))`).
    
