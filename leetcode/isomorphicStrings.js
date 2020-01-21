/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let patternS = new Array(s.length); 
    let patternT = new Array(t.length); 
    
    let map = {}; 
    
    for(let i = 0; i < s.length; i++) { 
        if(map[s[i]] === undefined) { 
            patternS[i] = i; 
            map[s[i]] = i; 
        }
        else{
            patternS[i] = map[s[i]]; 
        }
    }

    map = {}; 
    for(let i = 0; i < s.length; i++) { 
        if(map[t[i]] === undefined) { 
            patternT[i] = i; 
            map[t[i]] = i; 
        }else{
            patternT[i] = map[t[i]]
        }
    }   

    for(let i = 0; i < patternS.length; i++) { 
        if(patternS[i] !== patternT[i]) { 
            return false; 
        }
    }
    return true; 
};