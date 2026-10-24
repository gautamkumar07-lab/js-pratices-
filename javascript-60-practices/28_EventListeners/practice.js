// Topic: Event Listeners & Event Delegation

// Event Delegation Pattern demonstration
const listContainer = document.createElement("ul");
listContainer.innerHTML = `
  <li data-id="1">Item 1 <button class="delete-btn">Delete</button></li>
  <li data-id="2">Item 2 <button class="delete-btn">Delete</button></li>
  <li data-id="3">Item 3 <button class="delete-btn">Delete</button></li>
`;

// Single listener on parent handles all child clicks!
listContainer.addEventListener("click", (e) => {
  const target = e.target;
  const deleteBtn = target.closest(".delete-btn");
  if (deleteBtn) {
    const item = deleteBtn.closest("li");
    console.log("Delegated delete on item ID:", item.dataset.id);
  }
});

// Emulate a click on the 2nd delete button
const secondBtn = listContainer.querySelectorAll(".delete-btn")[1];
secondBtn.click();
