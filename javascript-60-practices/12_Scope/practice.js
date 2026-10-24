// Topic: Scope (Global, Function, Block, Lexical)

const globalVar = "I am Global";

function outer() {
  const outerVar = "I am Outer";

  function inner() {
    const innerVar = "I am Inner";
    // Scope chain lookup: innerVar -> outerVar -> globalVar
    console.log(innerVar);
    console.log(outerVar);
    console.log(globalVar);
  }

  inner();
}

outer();

// Block scoping with let/const
{
  let blockVariable = "Trapped in block";
  var leakedVariable = "Leaked outside block!";
}
// console.log(blockVariable); // ReferenceError!
console.log("var leaked:", leakedVariable);
