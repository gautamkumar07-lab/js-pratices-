// Topic: WeakMap (Garbage Collection & Safe Metadata)

// WeakMap for private metadata without memory leaks
const privateData = new WeakMap();

class Employee {
  constructor(name, ssn) {
    this.name = name;
    // Private data keyed to this instance
    privateData.set(this, { ssn });
  }

  getMaskedSSN() {
    const data = privateData.get(this);
    return data ? `***-**-${data.ssn.slice(-4)}` : null;
  }
}

let emp = new Employee("Jane Doe", "123-45-6789");
console.log("Employee:", emp.name);
console.log("Masked SSN:", emp.getMaskedSSN());

// When 'emp' is dereferenced, its entry in privateData is garbage collected!
emp = null;
console.log("Object dereferenced for GC.");
