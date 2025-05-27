// object literals as key-value pairs

const mysym = Symbol("key1")
const user = {
    name: 'Khushi',
    [mysym]: "mykey1", //using symbol as key, can be used like this
    age: 23,
    "full name": "Khushi Alphonse",
    addres: 'something'
}

// to access - 2 methods :
console.log(user.name)
console.log(user["name"])
console.log(user["full name"]) //this cannot be accessed through first method
console.log(user[mysym]) //symbols are accessed like this

user.uid = 345           //new keys added to object


user.greetings = () => {   //functions addde to objects 
    console.log("Hello")
}
console.log(user.greetings)
console.log(user.greetings())

user.greeting2 = () => {
    console.log(`Hello ${this.name}`)  //using this keyword
    return 20
}
console.log(user.greeting2)
console.log(user.greeting2())


user.age = 20 //to overwrite 
Object.freeze(user) //for no changes in user object, no error msg though on overwriting
user.age = 25
console.log(user)

const person = new Object()  // to declare a singleton object
const person2 = {}           // to declare a non-singleton object

const ob = {
    ob2: {
        name: "Khushi",
        info: {
            add: "home"
        }
    }
}
console.log(ob.ob2?.info.add) //? provides protection in api response
console.log(ob.ob3)

// to merge 2 objects
const obj1 = { "a": 1, "b": 2 }
const obj2 = { "c": 1, "b": 3 }
const obj3 = { ...obj1, ...obj2 }
const obj4 = Object.assign({}, obj1, obj2) /* first {} is where all sources are copied 
                                             can also do like (obj1,obj2) but in that case
                                             obj1 -> obj1+obj2 else
                                             {} -> obj1+obj2 */
console.log(obj3)
console.log(obj4)

//arrays of objects

const ob5 = [
    {
        id:1,
        name:"Khusi"
    },
    {
        id:2,
        name:"Khusi"
    },
    {
        id:3,
        name:"Khusi"
    
    },
]
console.log(Object.keys(ob5)) // since as array
console.log(Object.keys(user))

console.log(Object.values(ob5))
console.log(Object.entries(user)) //convets to array type , first arr-> key, second arr val --> value of og object

console.log(user.hasOwnProperty('uid'))  // hasOwnProprerty checks if property present in obect
 