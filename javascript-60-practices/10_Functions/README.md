# Functions (Declarations vs Expressions)

Understand function declarations, expressions, first-class citizens, parameters, and default values.


### First-Class Citizens
In JavaScript, functions are first-class values: they can be assigned to variables, passed as arguments, and returned from other functions.

### Declaration vs Expression:
1. **Function Declaration**:
   `function add(a, b) { return a + b; }`
   - Fully hoisted (can be called before its definition in the code).

2. **Function Expression**:
   `const add = function(a, b) { return a + b; };`
   - Not hoisted until initialization (behaves like standard variable).
    
