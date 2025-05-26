const arr=[1,2,3,"hello",true] // js arrays are resizable and can store mix of diff data types, 
console.log(arr)

// js array-copy creates shallow copy (all standard built-in copy ops)
const arr2 = arr
arr2[2]="yes"
console.log(arr)

let arr3 = new Array(1,2,3,4)
//array methods :

arr.push('no')             // insert element at back
console.log(arr)
console.log(arr.pop())     // removes and return element at back 

arr.unshift(0)             // inserts element at start
console.log(arr)
console.log(arr.shift())   // removes and return elements at start

console.log(arr.includes(2))
console.log(arr.indexOf(2))

const stringArr = arr.join(' ')  // joins array elements and converts them to string separated by specified separator
console.log(stringArr)


/* slice and splice :
    1. slice returns substring from start to end-1 index while splice returns substring from start to end parameters
    2. in slice, no modification in original array while in splice, modification in og [0...start-1 end+1 ...... n ]
*/

console.log(arr3.slice(1,3))
console.log(`with slice : ${arr3}`)

console.log(arr3.splice(1,3))
console.log(`with splice : ${arr3}`)

arr3.push(arr)
console.log(`arr3 after pushing arr in it : ${arr3}`)
console.log(arr3)

var arr4 = arr3.concat(arr)  // does not changes either arr3 or arr but makes a new array
console.log(`arr3 after conact arr : ${arr4}`)
console.log(arr4)

arr4=arr4.flat(Infinity)    //flattens single array
const arr5 = [...arr4, ...arr3]  // spreads all array elements 
console.log(arr5)


console.log(Array.isArray(true))  //checks whether array or not
console.log(Array.from(true))  // does not know what to add in array so o/p : []

console.log(Array.from("string")) // since iterble passed, takes each iterable as elements 

let score1 = 100
let score2 = null
let score3;
console.log(Array.of(score1,score2,score3)) //of returns an array from set of elements