// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970

let d = new Date()
console.log(d)                        //2025-05-25T18:39:35.859Z
console.log(d.toDateString())         //Sun May 25 2025
console.log(d.toLocaleString())       //5/25/2025, 6:42:06 PM
console.log(d.toLocaleDateString())   //5/25/2025
console.log(typeof d)                 //Object

let d2 = new Date(2024,11,3)
let d3= new Date("2024-03-14")
let d4=new Date("12-03-2024")
console.log(d2.toLocaleString())
console.log(d3.toLocaleString())
console.log(d4.toLocaleString())


let myTS = Date.now()
console.log(`My timestamp is ${myTS}`)
console.log(d2.getTime())

console.log(d3.toLocaleString('default',{
    weekday:"long",
    year:"2-digit"
}))
