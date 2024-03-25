function sayMyName() {
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("H");
    console.log("I");
    console.log("D");
}

// sayMyName();

//  when creating a function
//  the values taken as input in round brackets are called arguments
//  num1, num2 - these are known as parameters
function addTwoNums(num1, num2) {
    console.log(num1 + num2);
}
//  5,6 these are known as arguments
//  when calling a function
//  the values given in round brackets are called arguments
// addTwoNums(5, 6);

// function addTwoNums(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }
// const result = addTwoNums(5, 6);
// console.log("Result:", result);

// function addTwoNums(num1, num2) {
//     return num1 + num2;
// }
// const result = addTwoNums(5, 4);
// console.log("Result:", result);

// function loginUserMessage(username = "sirahtech") {
// if (username === undefined) {
//     console.log("Please Enter USerName");
//     return;
// }
// if (!username) {
// console.log("Please Enter USerName");
// return;
// }
// return `${username} just logged in`;
// }

// console.log(loginUserMessage("Shahid Nabi"));
// console.log(loginUserMessage());

// function calculateCartPrice(...num1) {
//     return num1;
// }

// console.log(calculateCartPrice(200, 400, 600));

const user = {
    name: "Shahid",
    age: 25,
    city: "Mumbai",
};

function handleObject(anyObject) {
    console.log(`Name is ${anyObject.name}`);
}

// handleObject(user);
// handleObject({
//     name: "Hello",
// });
const myNewArr = [100, 200, 300, 400];
function returnSecondVal(getArr) {
    return getArr[1];
}
console.log(returnSecondVal(myNewArr));
