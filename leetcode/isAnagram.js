var isAnagram = function(s, t) {
    let hashMap = {}; 

    for(let i = 0; i < s.length; i++) {
        if(hashMap[s[i]] === undefined){
            hashMap[s[i]] = 1;
        }else{
            hashMap[s[i]] += 1; 
        }
         
    }

    for(let i = 0; i < t.length; i++) {
        if(hashMap[t[i]] === undefined){
            return false; 
        }
        else{
            hashMap[t[i]] -= 1;
            if(hashMap[t[i]] === 0) 
                delete hashMap[t[i]]; 
        }
    }
    
    return Object.keys(hashMap).length === 0; 

};