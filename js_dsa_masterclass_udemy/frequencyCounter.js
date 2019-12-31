function same(arr1, arr2) { 
    if(arr1.length !== arr2.length) 
        return false; 
    
    let freqCounter = {}; 

    for(let val of arr1) {
        freqCounter[val**2] = (freqCounter[val**2] || 0 ) + 1;  
    }

    for(let val of arr2) { 
        freqCounter[val] = (freqCounter[val] || 0 )  + 1;  
    }
    
    for(let val of arr1) { 
        if(freqCounter[val**2] % 2 !== 0)
            return false;
    }

    return true; 
}


let ans = same([1,2,2,3], [9,1,4,4]); 

console.log(ans)