/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    if(arr.length === 0) return arr; 
    N = arr.length; 
    let i = 0;
    
    while ( i < N - 1){
        if(arr[i] === 0) { 
            let j = N-1; 
            while(j > i+1) { 
                arr[j] = arr[j-1]; 
                j--; 
            }
            arr[i+1] = arr[i]; 
            i++; 
        }
        i++; 
    }
};