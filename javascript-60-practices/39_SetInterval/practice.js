// Topic: setInterval & Recurring Execution

// 1. Basic setInterval with auto-cleanup
let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log(`Interval tick #${counter}`);
  if (counter >= 3) {
    clearInterval(intervalId);
    console.log("Interval cleared cleanly!");
  }
}, 50);

// 2. The Superior "Recursive setTimeout" Pattern
function runPoll(step = 1) {
  console.log(`Polling server cycle #${step}...`);
  if (step < 3) {
    setTimeout(() => runPoll(step + 1), 60);
  } else {
    console.log("Polling completed without interval drift!");
  }
}

setTimeout(() => runPoll(), 200);
