# Switch...Case Statement

Evaluate expressions against matching case clauses using strict equality (===), including fallthrough and object lookup alternatives.


### Switch Statement Mechanics
- Evaluates an expression and compares it to each `case` value using **strict equality (`===`)**.
- Requires a `break` statement to prevent execution from continuing into subsequent cases (intentional fall-through).
- Includes an optional `default` case when no matches occur.

### Modern Alternative: Object / Map Lookup
For pure mapping, an object dictionary is often cleaner and more testable than a long switch statement.
    
