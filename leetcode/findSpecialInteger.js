/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let count = Math.floor(arr.length / 4); 
    let i = 0;
    
    while(i < arr.length) { 
        let j = i
        let counts_same = 0; 
        while(j < arr.length && arr[i] === arr[j]){
            j++; 
            counts_same++; 
        }
        if(counts_same > count) { 
            return arr[i]; 
        }
        i = j; 
    }
};