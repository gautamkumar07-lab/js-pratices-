# Form Validation (Constraint API & Regex)

Modern client-side validation using HTML5 constraints, ValidityState API, and custom regex validators.


### Form Validation in JavaScript
1. **HTML5 Constraints**: `required`, `minlength`, `maxlength`, `pattern`, `type="email"`.
2. **ValidityState API**:
   - `input.checkValidity()`: Returns boolean.
   - `input.validity.valueMissing`, `typeMismatch`, `tooShort`, `patternMismatch`.
   - `input.setCustomValidity("Custom error message")`.
3. **Custom Real-Time Validation**:
   - Validate on `input` or `blur` events to give instant user feedback.
    
