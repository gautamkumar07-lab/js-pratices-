# DOM Manipulation (createElement, classList, innerHTML)

Dynamically create, update, style, and remove HTML nodes with XSS-safe best practices.


### Modifying the DOM
- **Creating**: `document.createElement(tagName)`
- **Appending / Inserting**: `parent.append(...nodes)`, `parent.appendChild(node)`, `parent.prepend()`
- **Classes**: `element.classList.add()`, `.remove()`, `.toggle()`, `.contains()`
- **Attributes**: `element.setAttribute('data-id', '123')`, `element.dataset.id`
- **Text & Content**:
  - `element.textContent`: Safe, treats input as raw text (prevents XSS!).
  - `element.innerHTML`: Parses HTML string (vulnerable to XSS with untrusted input!).
- **Removing**: `element.remove()`
    
