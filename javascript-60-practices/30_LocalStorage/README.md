# LocalStorage (Persistent Client Storage)

Persist key-value strings in the browser across sessions with size limits and JSON serialization.


### LocalStorage API
- **Persistence**: Survives browser restarts, tab closes, and computer reboots.
- **Storage Limit**: ~5MB to 10MB per origin.
- **Data format**: Strings only! Must use `JSON.stringify()` and `JSON.parse()`.
- **Synchronous**: Blocks the main thread for huge reads/writes.

### Methods:
- `localStorage.setItem(key, value)`
- `localStorage.getItem(key)`
- `localStorage.removeItem(key)`
- `localStorage.clear()`
    
