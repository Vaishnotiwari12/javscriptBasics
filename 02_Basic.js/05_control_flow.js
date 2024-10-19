//if

const isuserLoggedIn =  true
const temperature = 41

if(temperature == 40){
    console.log("less than 50");

} else{
    // console.log("temperature is greator than 50");
    
}
// console.log("execute");

// < ,>,<=,>=,==,!=,===,!==

// const score = 200

// if(score > 100) {
//   let  power="fly"
//     console.log(`user power:${power}`);
    
// }

// console.log(`user power:${power}`);


// const balance = 1000

// if(balace > 500) console.log("test"), console.log("test2");// aise ncomma lagakar nhi likhte hai


// if (balance < 500) {
//     console.log("less than 500");
    
// }  else if(balance < 750) {
//     console.log("less than 750");
    
// } else if(balance < 900) {
//     console.log("less than 900");
    
// } else if(balance < 1200) {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = false
const loggedInFromGoogleEmail = false 
const loggedInFromEmail = true



if( userLoggedIn && debitCard && 2==3) {

    console.log("allow to buy course ");
    
}

if(loggedInFromGoogleEmail || loggedInFromEmail) {
    console.log("user logged in ");
    
}

