function sayMyname(){
    console.log("V");
    console.log("A");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("N");
    console.log("O");
    
}

//sayMyname

// function addTwoNumbers(number1 ,number2){
//        console.log(number1+number2);
       
// }

function addTwoNumbers(number1 ,number2){
    // let result= number1+number2
    // console.log("Vaishno");
    
    // return result or
    return number1 + number2
}

const result= addTwoNumbers(5,5)

// console.log("Result:",result);

function loginUserMessage(username="sam"){
    // if(username===undefined){
    //   console.log("please enter a username");
    //   return
    // } or 
    if(!username){
        console.log("please enter a username");
        return
      }
    return `${username} just logged in`

}
// *********** function part 2******

// console.log(loginUserMessage("vaishnav"))


function calculateCartPrice(val1,val2,...num1){
     return num1
}

 //console.log(calculateCartPrice(200,300,400,1000))

 const user={
    username:"vaishnav",
    price:199
 }

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is 
        ${anyobject.price}`);
    

}

// handleObject(user) or 

handleObject({
    username:"satyam",
    price:399
})

 //Same through arraya how to pass
const myNewArray =[200,300,4000]

function returnSecondValue(getArray){
    return getArray[1]

}
// console.log(returnSecondValue(myNewArray)); or
console.log(returnSecondValue([200,800,400,845]));
