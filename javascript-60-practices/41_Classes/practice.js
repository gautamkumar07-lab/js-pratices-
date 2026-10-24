// Topic: Classes (ES6 Syntax & Class Fields)

class BankAccount {
  // Public field
  accountHolder;
  
  // Private field (Enforced by JS engine)
  #balance = 0;

  constructor(holder, initialDeposit = 0) {
    this.accountHolder = holder;
    this.#balance = initialDeposit;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Amount must be positive");
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$${this.#balance.toFixed(2)}`;
  }
}

const account = new BankAccount("Sarah Conner", 500);
account.deposit(250);
console.log("Account Holder:", account.accountHolder);
console.log("Balance:", account.getBalance());

// Attempting to access private field:
// account.#balance -> SyntaxError!
