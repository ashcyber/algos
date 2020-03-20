/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    let colSize = nums[0].length; 
    let rowSize = nums.length;
    if(r*c !== colSize*rowSize) return nums; 

    let arr = new Array(colSize*rowSize); 
    let res = new Array(r); 
    for(let k = 0; k < res.length;k++) { 
        res[k] = new Array(c); 
    }
    
    let idx = 0; 
    for(let i = 0; i < rowSize; i++) { 
        for(let j = 0; j < colSize; j++) { 
            arr[idx++] = nums[i][j]; 
        }
    }
    idx = 0; 
    for(let i = 0; i < r; i++){
        for(let j =0; j < c; j++) { 
            res[i][j] = arr[idx++]
        }
    }

    return res
 };