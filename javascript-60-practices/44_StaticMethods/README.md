# Static Methods & Properties

Define methods and properties on the class constructor itself rather than instances (utility & factory patterns).


### Static Members
Static methods and properties are defined on the class itself, not on instance objects created with `new`.
- Cannot access instance fields via `this` (because `this` points to the class constructor).
- Common for **Factory Methods**, **Utility Functions**, and **Constants**.
    
