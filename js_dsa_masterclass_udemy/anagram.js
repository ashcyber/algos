let validAnagram = (str1, str2) => {
    let freqCounter = { }; 

    if(str1.length !== str2.length)
        return false; 

    let strs = str1.concat(str2); 
    
    for(let val of strs) { 
        freqCounter[val] = ++freqCounter[val] || 1;  
    }

    for(let v of str1) { 
        if(freqCounter[v] % 2 !== 0)
            return false; 
    }

    return true; 
}   


let ans = validAnagram('qwerty', 'qeywrt'); 
console.log(ans);