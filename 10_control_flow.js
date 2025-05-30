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

if(Object.keys(obj).length === 0) console.log("empty")
else console.log("not empty")

// nullish coalescing operator (??) : for null or undefined values
let val1
let val2 = val1??10 // sometimes values are not fetched from firebase or backend
console.log(val2)
val2 = null??val1??5;
console.log(val2)

const price = 80
price>100?console.log("geater"):console.log("lesser")

