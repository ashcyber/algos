var longestCommonPrefix = function(strs) {
    if(strs.length === 0 || strs === null) return "";
    if(strs.length === 1) return strs[0];  
    let _str = strs[0];  
    let lcp = ""; 
    for(let i = 0; i < _str.length; i++) { 
        for(let st = 1; st < strs.length; st++) { 
            if(strs[st][i] !== _str[i]){ 
                return lcp 
            }
        }
        lcp+= _str[i]; 
    }
    return lcp; 
};