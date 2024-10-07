const name ="vaishnav"
const repoCount=5

//console.log(name+ repoCount + "value"); //old method 


// modern method

//console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const  gameName= new String('vaishno-vt ')

//console.log(gameName[0]);
console.log(gameName.__proto__);

//console.log(gameName.length);

//console.log(gameName.toUpperCase());

//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('s'));

const newString=gameName.substring(0,3)
//console.log(newString);

const anotherString=gameName.slice(-5,2)
console.log(anotherString);

 
const newStringOne="    vaishnav    "
console.log(newStringOne);

console.log(newStringOne.trim());

const url="https://vaishnotiwari.com/vaishnav50%tiwari"

console.log(url.replace('50%','-'));
 
console.log(url.includes('shno'));

console.log(url.split('- '));



//************AAJ KA GYAAN *******-----learn these things for interview---------------->>>>


// /datatypes are based on memory allocation
// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.

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