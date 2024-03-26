//  Immediately Invoked Functions Expressions  //       (IIFE)

// function chai() {
//     console.log("DB CONNECTED");
// }
// chai();

//  named iife
(function chai() {
    console.log("DB CONNECTED");
})();

(() => {
    console.log(`DB CONNECT`);
})();

// unnamed iife
((name) => {
    console.log(name);
})(`Shahid Nabi`);
