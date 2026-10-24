// Topic: Form Validation (Constraint API & Regex)

// Validator utility class
class FormValidator {
  static validateEmail(email) {
    const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
    if (!email) return { valid: false, error: "Email is required" };
    if (!emailRegex.test(email)) return { valid: false, error: "Invalid email format" };
    return { valid: true };
  }

  static validatePassword(pwd) {
    if (!pwd || pwd.length < 8) return { valid: false, error: "Must be at least 8 characters" };
    if (!/[A-Z]/.test(pwd)) return { valid: false, error: "Must contain uppercase letter" };
    if (!/[0-9]/.test(pwd)) return { valid: false, error: "Must contain a number" };
    return { valid: true };
  }
}

console.log("Email test (bad):", FormValidator.validateEmail("test@bad"));
console.log("Email test (good):", FormValidator.validateEmail("alex@example.com"));
console.log("Password test (short):", FormValidator.validatePassword("pass"));
console.log("Password test (strong):", FormValidator.validatePassword("SecretCode2026!"));
