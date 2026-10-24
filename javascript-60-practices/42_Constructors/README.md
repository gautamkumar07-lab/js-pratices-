# Constructors & The `new` Keyword

Understand how the `new` operator instantiates objects, links prototype chains, and executes the constructor.


### What happens when you call `new Constructor()`?
The JavaScript engine performs 4 distinct steps:
1. Creates a brand new empty plain JavaScript object: `{}`.
2. Links this object's prototype (`__proto__`) to the constructor function's `prototype`.
3. Binds `this` to the newly created object.
4. Executes the constructor code and returns `this` (unless the constructor returns its own object).
    
