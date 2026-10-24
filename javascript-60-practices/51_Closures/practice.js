// Topic: Closures (Lexical Scope & Private State)

// Factory function creating private encapsulated counter
function createCounter(initialValue = 0) {
  // 'count' is enclosed in private state!
  let count = initialValue;

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getValue() {
      return count;
    }
  };
}

const counterA = createCounter(10);
const counterB = createCounter(100);

console.log("Counter A inc:", counterA.increment()); // 11
console.log("Counter A inc:", counterA.increment()); // 12
console.log("Counter B dec:", counterB.decrement()); // 99

// 'count' cannot be directly modified from outside:
console.log("Direct access is undefined:", (counterA as any).count); // undefined
console.log("Current value:", counterA.getValue()); // 12
