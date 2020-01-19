/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) { 
    let arr = []
    for(let i = 0; i < nums.length; i+=2) { 
        let r = []; 
        for(let j = 0; j < nums[i]; j++) { 
            r.push(nums[i+1]); 
        }
        arr.push(...r);
    }
    return arr; 
};
