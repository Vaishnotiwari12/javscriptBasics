let myDate=new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);


//let myCreatedDate= new Date(2023,0,12)
//let myCreatedDate=new Date(2024,8,9,7)
//console.log(myCreatedDate.toLocaleString());

let myCreatedDate= new Date("09-10-2024")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp =Date.now()
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);

console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
//`${newDate.getDate()}` 

newDate.toLocaleDateString('default',{
    weekday:"long",
    
})

//***************************AAJ KA GYAAN*****************


// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970
// const myDate = new Date();
// console.log(myDate) //Output : 2023-10-09T14:38:09.847Z
// We can use various methods to convert this date into more readable value.
// console.log(myDate.toString()) //Output : Mon Oct 09 2023 07:39:18 GMT-0700 (Pacific Daylight Time)

// console.log(myDate.toLocaleString()) // Output : 10/9/2023, 7:44:20 AM
// console.log(myDate.toLocaleDateString()) //Output : 10/9/2023
// console.log(myDate.toLocaleTimeString()) // Output : 7:45:31 AM

// console.log(myDate.toDateString()) //Output : Mon Oct 09 2023
// console.log(myDate.toTimeString()) // Output : 07:46:40 GMT-0700 (Pacific Daylight Time)

// console.log(myDate.toISOString()) // Output : 2023-10-09T14:43:39.337Z
// console.log(myDate.toJSON()) //Output : 2023-10-09T14:40:58.495Z

