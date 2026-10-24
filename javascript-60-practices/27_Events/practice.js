// Topic: Events & Event Objects

// Simulating an event listener and event object
function simulateButtonClick(event) {
  console.log("Event Type:", event.type);
  console.log("Target Tag:", event.target.tagName);
  console.log("Key pressed / button:", event.key || "Left click");
  
  if (event.cancelable) {
    event.preventDefault();
    console.log("Default behavior prevented!");
  }
}

// Emulate a CustomEvent dispatch
const fakeEvent = new CustomEvent("userAction", {
  detail: { userId: 101, action: "PURCHASE" },
  bubbles: true,
  cancelable: true
});

console.log("Custom Event Created:", fakeEvent.type, fakeEvent.detail);
