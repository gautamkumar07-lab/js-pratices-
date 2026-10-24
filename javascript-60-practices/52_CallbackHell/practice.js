// Topic: Callback Hell & Pyramid of Doom

// Refactored async/await pipeline
const fakeApi = {
  getUser: async (id) => ({ id, name: "Taylor" }),
  getOrders: async (userId) => [{ id: "ORD-99", amount: 120 }],
  processPayment: async (orderId) => ({ success: true, orderId })
};

async function checkoutFlow(userId) {
  try {
    console.log("1. Fetching user...");
    const user = await fakeApi.getUser(userId);

    console.log("2. Fetching orders for:", user.name);
    const orders = await fakeApi.getOrders(user.id);

    console.log("3. Processing payment for order:", orders[0].id);
    const receipt = await fakeApi.processPayment(orders[0].id);

    console.log("Checkout complete:", receipt);
  } catch (error) {
    console.error("Pipeline failed:", error);
  }
}

await checkoutFlow(42);
