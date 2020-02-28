/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    if(S.length === 1) return S; 
    let i = 0; 
    let j = 1; 
    let arr = S.split('');
    let strLen = S.length;  
    while(j < strLen) {
        if(arr[i] !== arr[j]) { 
            i++;
            j++
        }else {
            arr.splice(i,2); 
            if(i > 0) { 
                i--; 
                j--; 
            }
            strLen-=2; 
        }
    }
    return arr.join(''); 
};