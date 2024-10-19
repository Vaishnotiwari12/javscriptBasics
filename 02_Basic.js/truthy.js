const userEmail =[]

if(userEmail) {
    // console.log("Got user email");

} else{
    console.log("Don't have user email");
    
}

 //******* MOST IMPORTANT NOTES ********


// falsy values ---------->

// false ,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy Values ---------->

// "0" ,'false' ," " , [] ,{} ,function(){}



// if (userEmail.length === 0) {
//     console.log("Array is Empty");
    
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0 ) {
    console.log("Object is empty" );
    
}

// Nullish Coalescing Operator (??): null undefined 

 
let val1;
// val1 = 5 ?? 10 // jo pahle aata hai wo assign ho jata hai 

// val1 = null ?? 10 

// val1 = undefined ?? 15

val1 = null ?? 10 ?? 52


console.log(val1);


// Ternary Operator

// condition ? true : false 

const iceTeaPrice  = 100 
iceTeaPrice <= 80 ? console.log("less than 80") 
: console.log("More than 80");
