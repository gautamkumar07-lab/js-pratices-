// Topic: Error Handling (try...catch...finally, Custom Errors)

// 1. Custom Error Subclass
class DatabaseError extends Error {
  constructor(message, query) {
    super(message);
    this.name = "DatabaseError";
    this.query = query;
    this.timestamp = Date.now();
  }
}

// 2. try...catch...finally pattern
function executeDatabaseQuery(query) {
  let isConnectionOpen = true;
  console.log("DB Connection opened.");

  try {
    if (!query) {
      throw new DatabaseError("Query cannot be empty", query);
    }
    console.log("Query executed successfully:", query);
    return { rows: [1, 2, 3] };
  } catch (err) {
    if (err instanceof DatabaseError) {
      console.error(`Caught DatabaseError: ${err.message}`);
    } else {
      console.error("Unknown error:", err);
    }
  } finally {
    isConnectionOpen = false;
    console.log("DB Connection closed cleanly in finally block.");
  }
}

executeDatabaseQuery("");
