const x = new Number(123)
console.log(x)

// check in inspect in browser for same -- you can get all functions

let num = 1234.56 //returns number in exponential form, length of no decided by parameter
console.log(num.toExponential())
console.log(num.toExponential(5))
console.log(num.toExponential(7))

num = 123.546768 //jo parameter pass hota hai utne decimal points tak round of kar deta h
console.log(num.toFixed(3))
console.log(num.toFixed(20))

num = 1456.778 //jo parammeter diye hai utne length of string rahta hai baaki exponential ya round off
console.log(num.toPrecision(2))

num = 123.75  //converts number to string since string has more operations than numbers
console.log(num.toString().length)
console.log(num.toString().split('.'))

num = 100000000   //adds formatting (,) to numbers
console.log(num.toLocaleString())
console.log(num.toLocaleString('en-IN'))

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.EPSILON)


// math functions :
console.log(Math) // more functions and details on inspect
console.log(Math.abs(-3))
console.log(Math.round(23.7))
console.log(Math.ceil(9.2))
console.log(Math.floor(9.7))
console.log(Math.max(1, 2, 4, 7, 3))
console.log(Math.min(23, 56, 11))
console.log(Math.random())

//to get random value on range [a,b]

const a = 10
const b = 20
console.log(Math.floor(Math.random()*(b-a+1)+a))
console.log(Math.floor(Math.random()*(b-a+1)+a))
console.log(Math.floor(Math.random()*(b-a+1)+a))
