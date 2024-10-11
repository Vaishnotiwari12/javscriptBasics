let a=100
const b=200
//var c=300 isko use nhi karte hai

if(true){
    let a=800
    const b=200
    //console.log("Inner:",a);
};

//console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="Vaishno"

    function two(){
        const website="Youtube"
        console.log(username);  
        
    }
    // console.log(website);not defined outside from block 
    two()
}

//    one()


  if(true){
    const username="vaishnav"
    if(username==="vaishnav"){
        const website=" youtube"
        //console.log(username + website);
        
    }
    // console.log(website);  block ke bahr defined nhi hai
    
  } 

//   console.log(username);  block ke bahr defined nhi hai
  

// ****************INTERSTING TOPICS ABOUT FUNCTIONS *********




console.log(addone(5))
function addone(num){
    return num +1

}
// addone(5)  ---> isko function se pahle bhi declare kar sakte hai 


// console.log(addTwo(6))  ----> isko nhi likh sakte hai function declare karne se pahle

const addTwo =function(num){
    return num +2
}

// console.log(addTwo(6))
