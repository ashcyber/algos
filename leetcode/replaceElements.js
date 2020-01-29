/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let max = arr[arr.length - 1]; 
    for(let i = arr.length -1;  i >= 0; i--) { 
        let temp = arr[i]; 
        arr[i] = max; 
        if(max < temp) max = temp; 

    }
    arr[arr.length - 1] = -1; 
    return arr;  
};

let ans = replaceElements([17,1]); 
console.log(ans); 