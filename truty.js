// truthy   falsy

// const userEmail = "shahd@sirah.io";
// if (userEmail) {
//     console.log("Got User Email");
// } else {
//     console.log("Dont Have User Umail");
// }

// falsy values
// false,  0,  -0, BigInt 0n, "",  null, undefined, NaN

//  truthy values
// "0",    'false',    " ",    [], {}, function(){},
// const userMail = "shahd@sirah.io";
// if (userMail.length === 0) {
//     console.log("Arr is empty");
// }

// const userMail = "shahd@sirah.io";

// if (userMail.length === 0) {
//     console.log("Array is empty");
// }

// The above code will not print "Array is empty" because the userMail variable is
// assigned a value of "shahd@sirah.io", which is not an empty string.

// If the goal is to check if the userMail variable is an empty string, the
// following code would be appropriate:

// const userMail = "";

// if (userMail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log("Obj is empty");
}

//  Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20;
console.log(val1);

//  Terniary Operator

// condition ? true : false;

const icePrice = 100;
icePrice <= 80 ? console.log("less than 80") : console.log("more than 80");
