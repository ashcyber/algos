function areThereDuplicates(...args) {
    let freqCounter = {}; 
    
    for(let val of args) { 
        freqCounter[val] = ++freqCounter[val] || 1; 
    }


    let vals = Object.values(freqCounter); 

    for (let v of vals) 
        if(v % 2 === 0 ) 
            return true; 
    return false; 
}

let ans = areThereDuplicates(1,2,3); 
console.log(ans); 
