// Topic: Fetch API (HTTP Requests, JSON, Headers)

// Simulated / Mock Fetch Demonstration
async function fetchUserDemo(userId) {
  console.log(`Fetching profile for user ${userId}...`);
  
  // Using public mock API endpoint
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`);
    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.status}`);
    }
    const todo = await res.json();
    console.log("Fetched Todo:", todo);
    return todo;
  } catch (err) {
    console.warn("Fetch fallback (offline or CORS):", err.message);
    // Graceful fallback representation
    return { id: userId, title: "Mock Todo Item", completed: true };
  }
}

await fetchUserDemo(1);
