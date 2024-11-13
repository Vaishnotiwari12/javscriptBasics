const userr = {
    username: "vaishnav",
    loginCount:8,
    SignedIn:true,
    getUserDetails:function(){
        console.log("Got user details from database");
        console.log(`username:${this.username}`);
        console.log(this)
        
        
    }
}

//console.log(userr.username);
//console.log(userr.getUserDetails());

//console.log(this);//global context empty parentesis{}


function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }
    return this
}
const userOne = new User("vaishno",12,true)
const userTwo = new User("ChaiaurCode",11,false)


console.log(userOne.constructor);

console.log(userTwo);
