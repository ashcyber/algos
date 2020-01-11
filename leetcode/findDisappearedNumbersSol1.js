/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let counter = new Array(nums.length + 1).fill(0); 
    let arr = []; 

    for(let i = 0; i < nums.length; i++) { 
        counter[nums[i]]++; 
    } 

    for(let i = 1; i <= nums.length; i++) { 
        if(counter[i] === 0) arr.push(i); 
    }

    return arr; 
};