// Topic: Explicit Binding: call(), apply(), and bind()

function introduce(greeting, punctuation) {
  return `${greeting}, my name is ${this.name}${punctuation}`;
}

const pilot = { name: "Maverick" };
const engineer = { name: "Scotty" };

// 1. call: arguments passed individually
console.log("call():", introduce.call(pilot, "Greetings", "!"));

// 2. apply: arguments passed as an array
console.log("apply():", introduce.apply(engineer, ["Hello", "."]));

// 3. bind: creates a permanently bound function
const boundPilotIntro = introduce.bind(pilot, "Hey there");
console.log("bind():", boundPilotIntro("!!"));
