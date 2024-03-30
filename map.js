// Maps

const map = new Map();
map.set("IN", "India");
map.set("SA", "Saudi Arabia");
map.set("PT", "Palistine");

// console.log(map);

for (const key of map) {
    // console.log(key);
}
for (const [key, value] of map) {
    // console.log(key, ":", value);
}

const myObj = {
    game1: "igi",
    game2: "igi2",
    game3: "igi3",
    game4: "igi4",
    game5: "igi5",
    game6: "igi6",
    game7: "igi7",
};

// for (const [key, value] of Object.entries(myObj)) {
// console.log(key, ":", value);
// }
// console.log("=============================");
// for (const [key, value] of myObj) {
// console.log(key, ":", value);
// }

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }
const mylang = {
    js: "javascript",
    css: "cascading",
    ts: "typescript",
    py: "python",
    rb: "ruby",
};
// for (const key in mylang) {
// console.log(key);
// }

// for (const key in mylang) {
// console.log(`${key} is shortcut for ${mylang[key]}`);
// }

// const coding = ["js", "rb", "py", "cpp"];

// coding.forEach(function (stacks) {
//     console.log(stacks);
// });

// coding.forEach((sirah) => {
//     console.log(sirah);
// });

// function printMe(sirah) {
//     console.log(sirah);
// }
// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// });

// const myc = [
//     {
//         langName: "JavaScript",
//         langId: "js",
//     },
//     {
//         langName: "Python",
//         langId: "py",
//     },
//     {
//         langName: "Dart",
//         langId: "dt",
//     },
// ];

// myc.forEach((stacks) => {
//     console.log(stacks.langName);
// });

const myNums = [1, 2, 3, 4, 5, 6];
// const newNum = myNums.map((num) => {
//     return num + 500;
// });

const newNums = myNums
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40);

console.log(newNums);
