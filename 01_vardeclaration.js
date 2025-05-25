// variable declearations in js
const accountId = 1234
var accountEmail = "khushi@gmail.com"
let accountPassword = "ghgh"
accountStatus = "processing"
let accountTotal
var accountSavings

// printing all types
console.table([accountId,accountEmail,accountPassword,accountStatus,accountTotal,accountSavings]);

/*difference between const, var, let
const - value cannot be changed during execution ; needs to be initialised
var - function scope or global (if defined outside func) ; allows redeclaration within same scope ; accessing var before hoisting gives undefined
let - block scoped (accessible within { }) ; does not allow redeclaration within same scope ; accessing var before hoisting gives "Reference Error"
*/

//changing values of variables
accountEmail="mansi@gmail.com"
accountStatus = "received"
accountTotal = 1200

// printing all types again
console.table([accountId,accountEmail,accountPassword,accountStatus,accountTotal,accountSavings]);
