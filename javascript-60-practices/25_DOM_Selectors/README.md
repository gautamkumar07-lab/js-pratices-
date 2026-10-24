# DOM Selectors (querySelector, getElementById)

Target HTML elements efficiently using modern CSS selectors and understand NodeList vs HTMLCollection.


### What is the DOM?
The Document Object Model (DOM) is an object-oriented tree representation of the HTML document.

### Primary Selector APIs:
1. **`document.querySelector(selector)`**: Returns the **first** element matching any CSS selector (e.g., `#id`, `.class`, `[data-attr]`). Returns `null` if not found.
2. **`document.querySelectorAll(selector)`**: Returns a static **NodeList** of all matches (supports `.forEach()`).
3. **`document.getElementById(id)`**: Fast direct lookup by ID attribute.
4. **`getElementsByClassName` / `getElementsByTagName`**: Legacy methods that return live **HTMLCollections** (do not support `.forEach()` natively).
    
