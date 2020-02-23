// Time Complexity: O(n*log(n))
let checkPermutation = function(str1, str2){
    if(str1.length !== str2.length) return false; 

    let st1 = str1.split('').sort(); 
    let st2 = str2.split('').sort(); 

    for(let i = 0; i < st1.length; i++) { 
        if(st1[i] !== st2[i])
            return false; 
    }
    return true; 
}

// Time Complexity: O(n)
let checkPermutation2 = function(str1, str2) {
    if(str1.length !== str2.length) return false; 

    let hm = {}; 
    for(let i = 0; i < str1.length; i++){ 
        if(hm[str1[i]] === undefined){ 
            hm[str1[i]] = 1; 
        }
        else { 
            hm[str1[i]]++; 
        }
    }

    for(let i = 0; i < str2.length; i++) { 
        if(hm[str2[i]] === undefined || hm[str2[i]] === 0) { 
            return false; 
        }
        hm[str2[i]]--; 
    }
    return true; 
}
