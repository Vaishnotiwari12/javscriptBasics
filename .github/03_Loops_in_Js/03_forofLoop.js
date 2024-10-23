// for of

// ["","",""]

// [{},{},{}]

const arr =[1,2,3,4,5,6]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

//*********Maps**********

const map =new Map()
map.set('IN', "India")
map.set('USA',"United states of America")
map.set('Fr',"France")
map.set('IN',"India")

// console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
    
}

const myObject = {
    'game1':'NAFS',
    'game2':'spiderman'
}

// for (const [value,key] of myObject) {
//     console.log(key,':-',value);
    
// } Note - the above for of loop is not applicable b'z object is not define

