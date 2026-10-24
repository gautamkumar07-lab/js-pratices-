// Topic: LocalStorage (Persistent Client Storage)

// Safe LocalStorage wrapper with JSON serialization
const storage = {
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.warn("Storage read error:", e);
      return defaultValue;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error("Storage quota exceeded or disabled:", e);
      return false;
    }
  }
};

// Test saving and loading complex state
storage.set("app_settings", { theme: "dark", notifications: true, lastLogin: Date.now() });
const loaded = storage.get("app_settings");
console.log("Loaded from localStorage:", loaded);
