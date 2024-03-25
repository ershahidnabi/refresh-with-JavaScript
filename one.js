console.log("Shahid Nabi");

const accountId = 19
let accountEmail = "ershahidnabi@gmail.com"
var accountPass = "12345"
accountLang = "JavaScript"
let accountLib;


// accountId = 2
// this did not work , as it is not allowed as per js rules 


accountEmail = "sn@sn.com"
accountPass = "0968"
accountLang = "Python"

// console.log(accountId);
/*
Prefer not to use var
Because of issue in block scope and functional scope
 */
console.table([accountId, accountEmail, accountPass, accountLang, accountLib]);