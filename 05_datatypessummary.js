

const isLoggedIn = false;
const outsideTemp =null;

let userEmail;

const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id===anotherId);


const bigNumber=2143236353231

// reference(non-primitive)
//Arrays ,objects ,functions

const heros=["shaktimaan","naagraj","doga"];
let myObj= {
    name:"vaishno tiwari",
    age:20,

}

const myFunction=function(){
    console.log("hello world");
    
}
console.log(typeof heros);



//for interview purpose 

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object



//++++++++++++++++++++++++++++++++++++++//

//stack(primitive) ,heap(non-primitive)

let myName= "vaishno tiwari"

let anotherName="myName"

anotherName="satyam tiwari"

console.log(myName);

console.log(anotherName);


let userOne= {
    email:"vaishnotiwari12@gmail.com",
    upi:"user@okaxis"
}

let usertwo=userOne
usertwo.email="satyamvaishno@gmail.com"

console.log(userOne.email);
console.log(usertwo.email);



// **********notes***********1-------------=>


// datatypes are based on memory allocation
// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.

//notes ********2*********************------------=>

// There are 2 types of datatype
// 1. Primitive datatype:-
//     1.String
//     2. Number
//     3. Boolean (true / false)
//     4. null (iska matlab hai empty or zero nahi hai)
//     5. undefined (aapne variable declare kardiya hai but usmein aap kya value dalenge aapne decide nahi kiya hai)
//     6. Symbol (kisi bhi value ko unique banane ke liye use kiya jata hai)
//     7. BigInt (jo badi values hoti hai oo hum BigInt mein use karte hai)

// 2. Preference datatype (Non Primitive datatype)
//     1. Array ( [ ] )
//     2. Object ( { } )
//     3. Function ( function( ){ } )