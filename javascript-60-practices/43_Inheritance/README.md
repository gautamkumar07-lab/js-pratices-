# Inheritance & `super` Keyword

Subclassing with `extends`, invoking superclass constructors and methods with `super()`.


### Subclassing with `extends`
Classes can inherit properties and methods from parent classes.

### The `super` Keyword:
1. **In constructor**: `super(...args)` calls the parent class constructor. **Must be called BEFORE accessing `this` in a derived class!**
2. **In methods**: `super.methodName()` invokes parent implementation.
    
