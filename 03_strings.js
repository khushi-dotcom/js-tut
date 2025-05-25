// 1. to declare a string :

let s1="helloqwertyuiopasdfghjklzxcvbnm"
let s2= new String('world')
/*shows this on console.log(x) on inspect in browser
VM228:1 String {'Hello World'}0: "H"1: "e"2: "l"3: "l"4: "o"5: " "6: "W"7: "o"8: "r"9: "l"10: "d"length: 11[[Prototype]]: Stringanchor: ƒ anchor()at: ƒ at()big: ƒ big()blink: ƒ blink()bold: ƒ bold()charAt: ƒ charAt()charCodeAt: ƒ charCodeAt()codePointAt: ƒ codePointAt()concat: ƒ concat()constructor: ƒ String()endsWith: ƒ endsWith()fixed: ƒ fixed()fontcolor: ƒ fontcolor()fontsize: ƒ fontsize()includes: ƒ includes()indexOf: ƒ indexOf()isWellFormed: ƒ isWellFormed()italics: ƒ italics()lastIndexOf: ƒ lastIndexOf()length: 0link: ƒ link()localeCompare: ƒ localeCompare()match: ƒ match()matchAll: ƒ matchAll()normalize: ƒ normalize()padEnd: ƒ padEnd()padStart: ƒ padStart()repeat: ƒ repeat()replace: ƒ replace()replaceAll: ƒ replaceAll()search: ƒ search()slice: ƒ slice()small: ƒ small()split: ƒ split()startsWith: ƒ startsWith()strike: ƒ strike()sub: ƒ sub()substr: ƒ substr()substring: ƒ substring()sup: ƒ sup()toLocaleLowerCase: ƒ toLocaleLowerCase()toLocaleUpperCase: ƒ toLocaleUpperCase()toLowerCase: ƒ toLowerCase()toString: ƒ toString()toUpperCase: ƒ toUpperCase()toWellFormed: ƒ toWellFormed()trim: ƒ trim()trimEnd: ƒ trimEnd()trimLeft: ƒ trimStart()trimRight: ƒ trimEnd()trimStart: ƒ trimStart()valueOf: ƒ valueOf()Symbol(Symbol.iterator): ƒ [Symbol.iterator]()[[Prototype]]: Object[[PrimitiveValue]]: ""[[PrimitiveValue]]: "Hello World"
*/

console.log(`I want to write ${s1} ${s2}`);

// 2. string functions :

console.log(s1.length)
console.log(s1.toUpperCase())
console.log(s1.toLowerCase())
console.log(s1.charAt(2))
console.log(s1.indexOf('ll'))
let x = s1.substring(1,6)
console.log(x)
let x2 = s1.slice(-1,4) // also can get substring backwards if start is -ve
console.log(x2)
const x3 = "  helllo    "
console.log(x3)
console.log(x3.trim())
console.log(x3.trimStart())
console.log(x3.trimEnd)
const x4 = "http://khushi%20alphonse:november.com"
console.log(x4.replace('%20','-'))
console.log(x4.split(':'))
