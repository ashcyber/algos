/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var buildKMPSubArr = function(needle) {
    let nArr = new Array(needle.length).fill(0); 
    let i = 0; 
    let j = i+1;
    
    while(j < needle.length) { 
        if(needle[i] === needle[j]) { 
            nArr[j] = i + 1; 
            j++;
            i++; 
        }else{            
            if(i !== 0) { 
                i = nArr[i - 1]; 
            }
            else {
                j++ 
            }
        }

    }
    return nArr
};

var strStr = function(haystack, needle) {
    let i = 0; 
    let k = 0  
    if(haystack.length > 0 && needle.length === 0) return 0; 
    if(haystack.length === 0 && needle.length === 0) return 0; 
    if(haystack.length < needle.length ) return -1; 
    
    let tempArr =   buildKMPSubArr(needle); 
    while( i <= haystack.length ) { 
        if(haystack[i] === needle[k]) { 
            k++; i++; 
        }
        else {
            if(k !== 0) { 
                k = tempArr[k - 1]; 
            }else {
                i++; 
            }
        }

        if(k === needle.length) { 
            return i - k; 
        }
    }
  
    return - 1; 
  
  };
  
  let ans = strStr("aab", "ab")
  console.log(ans); 