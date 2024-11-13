// let  myName  = "Vaishno    "
// let myChannel = "chai aur code "
// console.log(myName.trueLength);

let myHeroes = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.vaishno = function(){
    console.log(`vaishnav is present in all objects`);
    
}
Array.prototype.heyVaishno = function(){
    console.log(`vaishno says hello`);
    
}

heroPower.vaishno()

myHeroes.vaishno()
// myHeroes.heyVaishno()

// inheritance ****----->

const User = {
    name:"chai",
    email:"chai@google.com"
}

const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment:'JsAssignment',
    fulltime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// modern syntax******----->

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()

