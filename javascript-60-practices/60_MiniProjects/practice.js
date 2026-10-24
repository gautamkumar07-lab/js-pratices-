// Topic: Capstone Mini-Projects (Interactive Suite)

// Core architecture of a state-driven Mini Project
class TodoAppCore {
  #todos = [];

  constructor(initialTodos = []) {
    this.#todos = initialTodos;
  }

  addTodo(title) {
    if (!title.trim()) throw new Error("Title cannot be blank");
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
      createdAt: new Date().toLocaleTimeString()
    };
    this.#todos.push(newTodo);
    return newTodo;
  }

  toggleTodo(id) {
    const todo = this.#todos.find(t => t.id === id);
    if (todo) todo.completed = !todo.completed;
    return todo;
  }

  getActiveTodos() {
    return this.#todos.filter(t => !t.completed);
  }

  getAll() {
    return [...this.#todos];
  }
}

// Instantiate and test
const app = new TodoAppCore();
app.addTodo("Master JavaScript 60 Topics");
app.addTodo("Build interactive projects");
app.toggleTodo(app.getAll()[0].id);

console.log("All todos:", app.getAll());
console.log("Pending todos remaining:", app.getActiveTodos().length);
