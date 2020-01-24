const fs = require('fs'); 

const data = fs.readFileSync('test.txt').toString();
let hashMap = {}; 
let arr = data.split('\n').map((val => parseInt(val)));
for(let i = 0; i < arr.length; i++) { 
    hashMap[arr[i]] = i; 
}

target = []
for(let j = -10000; j <= 10000; j++){
    target.push(j); 
}

let counter = 0; 
for(let i = 0; i < arr.length; i++) { 
    for(let j = 0; j < target.length; j++) { 
        if(hashMap[target[j] - arr[i]] !== undefined) { 
            counter++; 
            break; 
        }
    }
}
console.log(counter); 

