// const coding = ["js", "rb", "py", "cpp"];

// const val = coding.forEach((item) => {
//     console.log(item);
//     return item;
// });

// console.log(val);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 4);
// console.log(newNums);

// const newNums = myNums.filter((num) => {
//     num > 4;     // return missing
// });
// console.log(newNums);

// const newNums = myNums.filter((num) => {
//     return num > 4;
// });
// console.log(newNums);

// const newNum = [];

// myNums.forEach((num) => {
//     if (num > 4) {
//         newNum.push(num);
//     }
// });
// console.log(newNum);

const books = [
    {
        title: "book 0",
        genre: "fiction",
        publish: "1990",
        edition: "2000",
    },
    {
        title: "book 1",
        genre: "fiction",
        publish: "1991",
        edition: "2001",
    },
    {
        title: "book on2",
        genre: "non-fiction",
        publish: "1992",
        edition: "2002",
    },
    {
        title: "book on3",
        genre: "fiction",
        publish: "1993",
        edition: "2003",
    },
    {
        title: "book on4",
        genre: "science",
        publish: "1994",
        edition: "2004",
    },
    {
        title: "book on5",
        genre: "non-fiction",
        publish: "1995",
        edition: "2005",
    },
    {
        title: "book on6",
        genre: "history",
        publish: "1996",
        edition: "2006",
    },
    {
        title: "book on7",
        genre: "fiction",
        publish: "1997",
        edition: "2007",
    },
    {
        title: "book on8",
        genre: "science",
        publish: "1998",
        edition: "2008",
    },
    {
        title: "book on9",
        genre: "history",
        publish: "1999",
        edition: "2009",
    },
];

let userBooks = books.filter((item) => item.genre === "non-fiction");
userBooks = books.filter((item) => {
    return item.publish >= "1995" && item.genre === "history";
});
console.log(userBooks);
