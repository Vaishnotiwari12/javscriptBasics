//singlton
//objects.create

//objects literals

const mySym=Symbol("key1")


const JsUser = {
    name:"Satyam",
    "fullname":"satyam Tiwari",
    age:20,
    location:"banglore",
    [mySym]:"mykey1",
    email:"vaishnotiwri12@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]

}
 
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullname"]);
// console.log(JsUser[mySym]);

JsUser.email="satyam@google.com"
// Object.freeze(JsUser)
JsUser.email="satyam123@yahoo.com"
//console.log(JsUser);

 JsUser.greeting = function(){
    console.log("hello JS user");
    
 }

 JsUser.greetingtwo = function(){
    console.log(`hello Js user,${this.name} `);
 }
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
