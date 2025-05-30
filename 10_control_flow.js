// difference between == and ===
if (2 == '2') { // only value checked
    console.log('equal')
}
if (2 != '2') { // only value checked
    console.log('equal2')
}

if (2 === '2') // value and type both checked
    console.log('equal3')
else console.log('not equal3')

if (2 !== '2') // value and type both checked
    console.log('not equal4')
else console.log('equal4')

const func = (key) => {
    switch (key) {
        case 1:
            console.log("one")
            console.log("one")
            console.log("one")
            break;
        case 2:
            console.log("two")
            break;
        case 3:
            console.log("three")
        default:
            console.log("default")

    }
}

func(1)
func(3)
func(8)

const userEmail = []//"","k"
if (userEmail) console.log("user name present")
else console.log("user name not present")


// falsy values - false, 0 , -0, "", null, undefined, Nan, BigInt 0n
// truthy values - "0", 'false', [], {}, " " , function(){}

// to check if object is empty 
const obj = {}

if (Object.keys(obj).length === 0) console.log("empty")
else console.log("not empty")

// nullish coalescing operator (??) : for null or undefined values
let val1
let val2 = val1 ?? 10 // sometimes values are not fetched from firebase or backend
console.log(val2)
val2 = null ?? val1 ?? 5;
console.log(val2)

const price = 80
price > 100 ? console.log("geater") : console.log("lesser")

const func2 = (itr) => {
    for (const element of itr) {     //forof loop statement
        console.log(element)
    }
}
func2([1, 2, 3, 4, 5])
func2("Hello there!")

const maps = new Map() // map data structure, remembers insertion order, unique key in map
maps.set('a', 1)
maps.set('b', 2)
maps.set('c', 3)
console.log(maps)
for (const [key, value] of maps) {
    console.log(key + "->" + value)
}

const myob = {
    num1: 1,
    num2: 2,
    num3: 3,
    num4: 4
}
console.log(myob)

for (const e of Object.keys(myob)) {   // using forof loop
    console.log(e + "->" + myob[e])
}

for (const key in myob) {               // using forin loop
    console.log(key + "->" + myob[key])
}
for (const key in [1, 3, 4, 4]) {          // forof printed elements while forin prints keys
    console.log(key)
}

const arr = [1, 2, 3, 4, 5, 6]              // using foreach loop as method of arr object
arr.forEach((item, index, arr) => {
    console.log(item + " " + index + " " + arr)
})

function print(item) {
    console.log(item)
}
[1, 4, 2, 7, 9].forEach(print)

const obb = [
    {
        name: "Khushi",
        age: 20
    }, 
    {
        name: "Mansi",
        age: 18
    }, 
    {
        name: "Karuna",
        age: 45
    }, 
    {
        name: "Khushi",
        age: 20
    }
]
obb.forEach((item)=>{
    console.log(item.name+" "+item.age)
})