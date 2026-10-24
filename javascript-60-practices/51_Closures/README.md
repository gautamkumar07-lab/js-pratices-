# Closures (Lexical Scope & Private State)

How functions retain access to their outer lexical environment even after the outer function has finished executing.


### What is a Closure?
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the **lexical environment**).

### Mental Model: The Backpack
When a function is defined, it gets a hidden "backpack" (`[[Scopes]]`) containing all variables in its outer scope. When returned and called elsewhere, it unpacks that backpack!

### Common Uses:
- Data encapsulation / private variables
- Factory functions
- Partial application & currying
- Memoization
    
