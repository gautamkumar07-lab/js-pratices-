# SessionStorage (Tab-Scoped Storage)

Tab-scoped ephemeral storage that persists across page refreshes but clears when the tab is closed.


### SessionStorage vs LocalStorage vs Cookies

| Feature | SessionStorage | LocalStorage | Cookies |
| :--- | :--- | :--- | :--- |
| **Lifetime** | Tab session only | Permanent | Set by expiration date |
| **Scope** | Current tab / origin | Origin-wide | Origin / Domain |
| **Capacity** | ~5MB | ~5MB - 10MB | ~4KB |
| **Sent to server** | Never | Never | Sent with every HTTP request |

### Best Use Cases:
- Temporary multi-step wizard form progress
- Tab-specific state (e.g. active tab in an admin panel)
- Temporary filter states
    
