// Topic: Higher-Order Functions & Composition

// 1. HOF that returns a function: withTiming logger
function withTiming(fn) {
  return function(...args) {
    const start = performance.now();
    const result = fn(...args);
    const duration = (performance.now() - start).toFixed(4);
    console.log(`Execution took ${duration}ms`);
    return result;
  };
}

// Heavy computation
const computePrimes = withTiming((limit) => {
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (primes.every(p => i % p !== 0)) primes.push(i);
  }
  return primes.length;
});

console.log("Primes found:", computePrimes(1000));

// 2. Simple Function Composition (pipe)
const pipe = (...fns) => (initialVal) => fns.reduce((val, fn) => fn(val), initialVal);

const trim = (s) => s.trim();
const toUpper = (s) => s.toUpperCase();
const exclaim = (s) => `${s}!!!`;

const sanitizeAndExclaim = pipe(trim, toUpper, exclaim);
console.log(sanitizeAndExclaim("   javascript higher order functions   "));
