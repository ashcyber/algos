let uniqChars = function(str) { 
    let hm = {}; 
    for(let i = 0; i < str.length; i++) { 
        if(hm[str[i]] === undefined) { 
            hm[str[i]] = 1; 
        }else { 
            return false; 
        }
    }
    return true; 
}
