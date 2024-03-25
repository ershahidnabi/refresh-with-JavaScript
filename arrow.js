const user = {
    username: "shahidnabi",
    year: 2024,

    welcomeMessage: function () {
        console.log(`${this.username} , Welcome to website`);
        // console.log(this);
    },
};

// user.welcomeMessage();
// user.username = "hello";

// user.welcomeMessage();
// console.log(this);

function chai() {
    console.log(this);
}
chai();
//  output below
/*
{
    <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  navigator: [Getter],
  fetch: [Function: fetch],
  crypto: [Getter]
} 
}*/
