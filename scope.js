//  global scope    //
// let a = 300;

// if (true) {
//  block scope //
//     let a = 10;
//     const b = 20;
//     console.log(a);
// }

// console.log(a);
// console.log(b);

// function one() {
//     const username = "shahid";

//     function two() {
//         const website = "youtube";
//         console.log(username);
//     }
// console.log(website);    this is out of scope of two
//     two();
// }
// one();

console.log(addOne(5));
function addOne(num) {
    return num + 1;
}

const addTwo = function (numb) {
    return numb + 2;
};
console.log(addTwo(5));
