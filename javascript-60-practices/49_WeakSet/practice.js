// Topic: WeakSet (Object Tagging without Leaks)

// Tracking processed objects without memory leaks
const processedRequests = new WeakSet();

function handleApiRequest(req) {
  if (processedRequests.has(req)) {
    console.log("Skipping: Request already processed!");
    return;
  }

  processedRequests.add(req);
  console.log(`Processing request #${req.id}...`);
}

let reqA = { id: 101, url: "/api/user" };
handleApiRequest(reqA);
handleApiRequest(reqA); // Ignored!

// When reqA is discarded, it leaves WeakSet automatically:
reqA = null;
