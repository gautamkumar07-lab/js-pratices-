# Error Handling (try...catch...finally, Custom Errors)

Robust error management, creating custom Error subclasses, and guaranteed cleanup with finally blocks.


### Robust Error Handling in JavaScript
```js
try {
  // Risky code
} catch (error) {
  // Handles exception
} finally {
  // ALWAYS runs (cleanup, close connections, stop spinners)
}
```

### Custom Error Subclasses:
Inherit from `Error` to provide domain-specific errors (e.g. `ValidationError`, `HttpError`) with custom status codes and properties.
    
