//Array

const myArr=[1,2,3,4,5,6,7]

const myHeros=["shaktimaan","Naagraj"]

const myArr2=new Array(8,2,3,4,5)
//console.log(myArr[2]);

//Arrays Methods

// myArr.push(6)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(10));

// const newArr=myArr.join()
// console.log(newArr);


// console.log(myArr);

//slice ,splice 

console.log("A",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);

// **********SUMMARRY:*************

// 1. Array is written in brackets [  ].
// 2.Array data type is an object.
// 3.Array can contain different data types . i.e string,number,boolean,array etc.
// 4. Array is zero based indexing. It starts with zero.
// 5. Once changed its original value will also change beacause it is non primitive (refrence) type.

// ARRAY METHODs :

// 1.Push = adds value to last of an array.
// 2. Pop = removes last value of an array.
// 3. Unshift = adds value at first of an array.
// 4.Shift = removes first value of an array.
// 5. Includes = checks true or false.
// 6. IndexOf = checks the position of value in number form.
// 7.Join = converts to string.
// 8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
// 9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.



// =>slice() does not manupulate main array.
// => splice() manupulate original array.


