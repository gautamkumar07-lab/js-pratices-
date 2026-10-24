# Explicit Binding: call(), apply(), and bind()

Borrow methods and control execution context: call (comma list), apply (array of args), and bind (returns new function).


### Controlling `this` Explicitly
Functions have built-in methods to override what `this` points to:

1. **`fn.call(thisArg, arg1, arg2, ...)`**: Invokes function immediately with arguments passed as a list.
2. **`fn.apply(thisArg, [arg1, arg2, ...])`**: Invokes function immediately with arguments passed as an array.
3. **`fn.bind(thisArg, ...presetArgs)`**: Does **NOT** execute immediately! Returns a new bound function with permanently locked `this`.
    
