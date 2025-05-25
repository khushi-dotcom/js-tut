/* JavaScript employs dynamic typing, 
meaning data types are associated with values at runtime rather than being explicitly declared for variables. 
When a value is assigned to a variable, the JavaScript engine infers the data type based on the value's form and characteristics. 
This contrasts with statically-typed languages where data types are explicitly declared. */

/*------------------------------------------------------------------------------------------------------------------------*/

/*1. primitive data types : ( based on how data is stored and accessed in memeory ) - 7 types
                            - data stored in stack
                            - call by value, aother copy is created and assigned value
*/
                            

let userName = "Khushi" //String data type
console.log(typeof(userName))

let age = 15 //Number data type  //BigInt data type - range is 2^53
console.log(typeof(age))

let state = null //null data type - standalone value, object type
console.log(typeof state )

let loggedIn = true //boolean data type - true or fasle
console.log(typeof loggedIn )

let address; //undefined data type - value not assigned
console.log(typeof(address))

//symbol data type - uniqueness
const uid = Symbol('123')
const uid2 = Symbol('123')
console.log(uid == uid2)

/*------------------------------------------------------------------------------------------------------------------------*/

/*2. reference data type - non -primitive - ( array, objects, functions )
                            - data stored in heap
                            - reference allocated to var names ( call by reference)
                            - copy not created, same reference passed to both objects 
*/

// object data type
let person = {
    name: "khushi",
    age:18}
console.log(person)
console.log(typeof person)

// array object 
let studNames = ["khushi", "mansi"]
console.log(studNames)
console.log(typeof studNames)

// function object

const myfunc = ()=>{
    console.log("funtion");
}
myfunc();

/*------------------------------------------------------------------------------------------------------------------------*/

//3. conversion of data types - all types to number

var score = "33"  // number string --> number
var num = Number(score)
console.log(num)
console.log(typeof(num))

score = "33a"     // string --> NaN
num = Number (score)
console.log(num)
console.log(typeof(num))

score = true // boolean --> true = 1, false = 0
num = Number (score)
console.log(num)
console.log(typeof(num))

score = null  // null --> 0
num = Number (score)
console.log(num)
console.log(typeof(num))

//3. conversion of data types - all types to boolean

var value;  // undefined --> false
var bol = Boolean(value);
console.log(bol)
console.log(typeof(bol))

value = 0;    // number --> false if 0
bol = Boolean(value);
console.log(bol)
console.log(typeof(bol))

value = 12;  // number --> true if !0
bol = Boolean(value);
console.log(bol)
console.log(typeof(bol))

value = "";   // string --> false if empty
bol = Boolean(value);
console.log(bol)
console.log(typeof(bol))

value = "khushi";  // string --> true if not null
bol = Boolean(value);
console.log(bol)
console.log(typeof(bol))

value = null;  // null --> false
bol = Boolean(value);
console.log(bol)
console.log(typeof(bol))

//3. conversion of data types - all types to string

var value;
let s = String(value)

let x = 2/3
console.log(x)
console.log(typeof x)

