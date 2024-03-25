//  Immediately Invoked Functions Expressions  //       (IIFE)

// function chai() {
//     console.log("DB CONNECTED");
// }
// chai();

//  named iife
(function chai() {
    console.log("DB CONNECTED");
})();

// unnamed iife
(() => {
    console.log(`DB CONNECT`);
})();

((name) => {
    console.log(name);
})(`Shahid Nabi`);
