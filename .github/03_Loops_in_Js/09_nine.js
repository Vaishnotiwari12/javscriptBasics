const myNums = [1,2,3]

// *********** USING ARROW FUNCTIONS

// myTotal = myNums.reduce( function (acc,currval) { //acc-> accumulator, currval->current value
//     console.log(`acc : ${acc} and currval: ${currval}`);
    
//     return acc + currval
// } , 3)



const myTotal = myNums.reduce(( acc,curr) => acc + curr,0 )

console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "mobile development  course",
        price : 6999
    },
    {
        itemName : " data science course",
        price : 4999
    },
]

 const priceTopay= shoppingCart.reduce( (acc ,item) => acc + item.price,0)

 console.log(priceTopay);
 