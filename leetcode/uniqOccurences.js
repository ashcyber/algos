var uniqueOccurrences = function(arr) {
    let hm = {}; 
    
    for(let i = 0; i < arr.length; i++) { 
        if(hm[arr[i]] === undefined) { 
            hm[arr[i]] = 1; 
        }else{
            hm[arr[i]]++; 
        }
    }
    
    let keyHash = {}; 
    let keyArr = Object.values(hm); 
    for(let i = 0; i < keyArr.length; i++) { 
        if(keyHash[keyArr[i]] === undefined) { 
            keyHash[keyArr[i]] = 1; 
        }
        else { 
            return false; 
        }
    }
    
    return true; 
};

