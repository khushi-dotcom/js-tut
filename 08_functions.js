function add(num1, num2) {  // function definition --> parameters
    return num1 + num2
}
console.log(add())         // function call --> arguments
console.log(add(2, 6))
console.log(add(3, "10"))
console.log(add(3, null))
console.log(add(3,))

//function browser_login(username = "User"){ // user as feault value, var never undefined
function browser_login(username) {
    if (!username) {
        console.log("no log in")
        return
    }
    console.log(`welcome ${username}`)
}
browser_login()
browser_login("Khushi")

// ...-> both rest and spread operator
function calculate_cart_price(val1, val2, ...val) {
    console.log(val)
    if (!val1 && !val.length) return 0
    val1 += val2
    for (let i = 0; i < val.length; i++) {
        val1 += val[i]
    }
    return val1;
}
console.log(calculate_cart_price())  //trying all types of arguments
console.log(calculate_cart_price(10, 20))
console.log(calculate_cart_price(30, 40, 50))

const user = {
    name: "Khushi",
    roll: 12112008,
    dept: "Computer Engineering"
}

function LogIn(obj) {   //using objects in functions
    console.log(`${obj.name} with roll number ${obj.roll} is in department ${obj.dept}`)
}
LogIn(user)

let a = 30 // global scope
if (true) {  //block scope
    let a = 30
    const b = 20
    var c = 50
    d = 30
}

console.log(a)
// console.log(b)
console.log(c)
console.log(d)

// whenever a function is called or declared, a new call stack is created every time

//console.log(nyfun("Khushi")) --> give error, cannot be used before var declaration, not in case of func declaration
const nyfun = function (user) { //function but being used as expression
    return `Hello ${user}`
}
console.log(nyfun("Khushi"))

const person = {
    name: "Mani",
    age: 20,
    greetings: function () {
        console.log(`Hello ${this.name}`)  //using this keyword in normal function
        console.log(this)
    }
}

person.greetings()
person.name = "Mansi"
person.greetings()

console.log(this) //shows {} in node env, but shows global windows object in browser

/* for arrow functions, simple remove "function" befor () and add => after ()
 normal func --> can be hoisted ( call before declaration )
             --> this depends on the calling context.                
 arrow func --> cannot be hoisted
            --> Inherits this from the surrounding scope. */
const myfun = (user) => { //function but being used as expression
    return `Hello ${user}`
}
console.log(myfun("Khushi"))

const person2 = {
    name: "Mani",
    age: 20,
    greetings: () => {
        console.log(`Hello ${this.name}`)  //using this keyword in arrow function
        console.log(this)
    }
}
person2.greetings()  //caanot use this in user
person2.name = "Mansi"
person2.greetings()

// arrow function with implicit return

const val = (a, b) => (a + b)
console.log(val(10, 20))
console.log(val())

const val2 = () => ({ uname: "Khushi" })
console.log(val2());

// immediately invoked function expression: 
// write all func exp before (), first ()--> function expression, second ()--> execution

(function day(user) {
    console.log(`Good day ${user}`)
})("Karuna");

// iife using arrow function :
((user)=>{
    console.log(`Good day ${user}`)
})("Rajesh");