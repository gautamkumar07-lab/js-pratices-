// Topic: The `this` Keyword & Execution Context

// 1. Implicit Binding
const person = {
  name: "Morgan",
  greet() {
    return `Hello, I am ${this.name}`;
  }
};
console.log(person.greet()); // "Hello, I am Morgan"

// 2. Losing 'this' context (The classic bug)
const detachedGreet = person.greet;
console.log("Detached:", detachedGreet()); // 'this' is undefined in strict mode!

// 3. Arrow function lexical 'this'
const workshop = {
  title: "JS Mastery",
  students: ["Alice", "Bob"],
  printAttendees() {
    // Arrow function captures 'this' from printAttendees
    this.students.forEach(student => {
      console.log(`${student} enrolled in ${this.title}`);
    });
  }
};
workshop.printAttendees();
