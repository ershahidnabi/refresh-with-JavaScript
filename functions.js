// singleton

// Object literals

const mySym = Symbol("key1");
const mySymb = Symbol("key2");
const JsUser = {
    "full name": "Shahid Nabi",
    name: "Shahid",
    mySym: "myKey1", //  this gives output type of String
    [mySymb]: "myKey2", //  this gives output type of symbol
    age: 10,
    location: "Srinagar",
    email: "ershahidnabi@gmail.com",
    isLoggedIn: "false",
    lastLoginDays: ["Monday", "Tuesday"],
};
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);
// console.log(JsUser[mySymb]);
// console.log(typeof JsUser[mySymb]);

// JsUser.email = "shahid@sirah.com";
// Object.freeze(JsUser);
// JsUser.email = "hello@gpt.com";
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello User");
};
JsUser.greeting2 = function () {
    console.log(`Hello User, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
