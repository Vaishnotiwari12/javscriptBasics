
const user = {
   username:"Vaishnav",
   price:999,
   WelcomeMessage: function(){
    console.log(`${this.username},Welcome to website`);
    console.log(this);
    
   }
}

// user.WelcomeMessage()
// user.username="Satyam"//changing username

// user.WelcomeMessage()

//   function chai(){
//     let username="vaishno"
    // console.log(this.username);//username defined nhi hai
    
// }
// chai()



// const chai = function  (){
//    let username="vaishno"
//      console.log(this.username);

//  }
// chai()
// *****************Arrow function***********
 
const chai =  () => {
    let username="vaishno"
       console.log(this);
      
  }

 // chai()


()=>{}   //notation of arrow function


// const addTwo = (num1 ,num2)=>{   // curly bracket me return karna padega
//     return num1 +num2
//   } or other  implicit return method

//   const addTwo = (num1 ,num2) => num1 +num2 or kaise likh sakte hai

//   const addTwo = (num1 ,num2) => (num1 +num2) //return nhi likhenge 

      const addTwo = (num1 ,num2) => ({username: "Vaishno"})


  console.log(addTwo(3,7))
  
