# Callback Hell & Pyramid of Doom

Identify the hazards of deeply nested asynchronous callbacks and refactor them with Promises and async/await.


### What is Callback Hell?
Also known as the "Pyramid of Doom", callback hell occurs when multiple asynchronous operations depend on the result of previous ones, creating deeply indented, fragile code:

```js
// The Pyramid of Doom (Anti-pattern!)
getUser(id, (err, user) => {
  if (err) return handleErr(err);
  getOrders(user.id, (err, orders) => {
    if (err) return handleErr(err);
    getOrderDetails(orders[0].id, (err, details) => {
      // Hard to maintain, catch errors, or cancel!
    });
  });
});
```

### The Clean Solution:
Refactor into Promises with chained `.then()` or modern `async/await`!
    
