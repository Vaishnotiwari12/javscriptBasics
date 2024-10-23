//for each loop

const coding = ["js","ruby","java","python","cpp"]

// coding.forEach( function (item) {
     // console.log(item);
    
// } )

coding.forEach( (item) => {   // using arrow function
    // console.log(item);
    
})


// function printMe(item){  //using parameter 
    // console.log(item);
    
// }
// coding.forEach(printMe)


// coding.forEach( (item , index ,arr) => {
//          console.log(item , index ,arr);
         
// }) 


const myCoding = [
    {
        languageName: "java",
        languageFileName :"py"
    },
    {
        languageName: "javascript",
        languageFileName :"py"
    },
    {
        languageName: "ruby",
        languageFileName :"py"
    },
]

myCoding.forEach( (item) =>{
    console.log(item.languageName);
    
 
})

