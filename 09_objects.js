//const tinderUser=new Object()
const tinderUser={}

tinderUser.id="2131abc"
tinderUser.name="Priyanshu"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser={
    email:"Some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Vaishno",
            lastname:"tiwari"
        }
        
    }
}

//console.log(regularUser.fullname.userfullname?.lastname);
 
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2,obj4)

const obj3={...obj1,...obj2}
//console.log(obj3);

const user=[
    {
        id:1,
        email:"vaishno@google.com"
    },
    {
        id:1,
        email:"vaishno@google.com"
    },
    {
        id:1,
        email:"vaishno@google.com"
    },
]


user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLogged'));


//*********************AAJ KA GYAAN*********------>>>>>

// would like to share my observation as well...

// let Obj1 = { 1: "a", 2: "b" };
// let Obj2 = { 3: "c", 4: "d" };

// let Obj3 = { ...Obj1, ...Obj2 }; //Here I have used spread operator but in order to access I need to use []
// let Obj4 = Object.assign({}, Obj1, Obj2); //Best practice beacause it would not change the source object (Obj1)
//let Obj4 = Object.assign(Obj1, Obj2); //Bad practice 
// console.log(Obj1); //It make changes in target Object as well.

 const course={
    coursename:"Js in hindi",
    price:"999",
    courseInstructor:"Vaishnav"
 }
 //course.courseInstructor 


// const  {courseInstructor:instructor}=course
//console.log(courseInstructor);
console.log(instructor);

// {
//     "name" :"vaishno",
//     "coursename":"999",
//     "price":"free"
// }   

{
    {}
    {}
    {}
}