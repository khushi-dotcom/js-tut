const arr = [1, 2, 3, 4, 5, 6, 7]

//  const filter_arr = arr.filter((i)=>{
//     return i&1
//  })
const filter_arr = arr.filter((i) => i & 1)

console.log(filter_arr)

const books = [
   { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
   { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
   { title: 'Book Three', genre: 'History', publish: 2001, edition: 2007 },
   { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
   { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
   { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
   { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
   { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// some queries using filters

const historybooks = books.filter((ob) => ob.genre === "History")
console.log(historybooks)

const publish_after_2000 = books.filter((ob) => ob.publish > 2000)
console.log(Object.entries(publish_after_2000))

const historybooks_published_after_2000 = books.filter((ob) => {
   return (ob.publish > 2000 && ob.genre === "History")
})
console.log(historybooks_published_after_2000)

const map_arr = arr.map((num)=> num*10)   // map to multiply all numbers by 10 
console.log(map_arr)

const map_add10_mul2_fileven = arr
                                 .map((num)=>num+10)
                                 .map((num)=>num+2)
                                 .filter((num)=> !(num&1))  // map and filetr chaining
console.log(map_add10_mul2_fileven)

let initial_sum = 10
//const reduce_arr = arr.reduce((accumulator, curval)=> accumulator+curval,initial_sum)
const reduce_arr = arr.reduce((accumulator, curval)=>{
   console.log(`accumulator : ${accumulator} and cursum : ${curval}`)
   return accumulator+curval
},initial_sum)
console.log(reduce_arr)


const shoppingcart = [
   {
      item:"glass",
      price : 2000
   },
   {
      item:"glass2",
      price : 20
   },
   {
      item:"glass3",
      price : 2030
   },
   {
      item:"glass4",
      price : 21000
   }
]
const total_price = shoppingcart.reduce((acc,curval)=>acc+curval.price,0)
console.log(total_price)