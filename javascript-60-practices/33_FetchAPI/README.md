# Fetch API (HTTP Requests, JSON, Headers)

Make modern asynchronous HTTP network calls, configure headers, parse JSON streams, and handle HTTP error codes.


### The Fetch API
Replaced XMLHttpRequest as the browser standard for network requests:
- Returns a Promise resolving to a `Response` object.
- **Does NOT reject on HTTP error codes (like 404 or 500)!** Only rejects on network failures (e.g., DNS failure, offline).
- Must explicitly check `response.ok` (`status in 200..299`).

### Typical Pattern:
```js
const res = await fetch(url);
if (!res.ok) throw new Error(`HTTP error ${res.status}`);
const data = await res.json();
```
    
