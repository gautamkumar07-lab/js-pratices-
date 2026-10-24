// Topic: SessionStorage (Tab-Scoped Storage)

// Session storage usage
try {
  sessionStorage.setItem("wizard_step", "3");
  sessionStorage.setItem("form_draft", JSON.stringify({ step: 3, completed: false }));

  console.log("Current step:", sessionStorage.getItem("wizard_step"));
  console.log("Draft:", JSON.parse(sessionStorage.getItem("form_draft") || "{}"));
  console.log("SessionStorage length:", sessionStorage.length);
} catch (e) {
  console.log("SessionStorage unavailable:", e);
}
