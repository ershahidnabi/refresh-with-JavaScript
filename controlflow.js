//  if

/*
<   less than
>   greater than
<=  less than or equal to
>=  greater than or equal to
=   assignment operator
==  equal to
!=  not equal to
===  strictly equal to  //  checks typeof data type
*/

// const score = 200;

// if (score > 100) {
//     let power = fly;
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// const bal = 1000;

// if (bal > 500) console.log("test");

// const bal = 1000;

// if (bal < 500) {
//     console.log("less than 500");
// } else if (bal < 750) {
//     console.log("less than 750");
// } else if (bal < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const isLoggedInFromGoogle = false;
const isLoggedInFromEmail = true;

//  &&  indicates 'and' which means all conditions should be true
if (userLoggedIn && debitCard) {
    console.log("Allow to Shop");
}
//  ||  indicates 'or' which means atleast one condition should be true
if (isLoggedInFromGoogle || isLoggedInFromEmail) {
    console.log("Allow LogIn");
}
