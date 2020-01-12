/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
    let len = nums.length;
    let arr = new Array(nums.length);   
    let idx = Math.abs(len - (k) % len); 
    for(let i = 0; i < len; i++) { 
        arr[i] = nums[(idx + i) % len]
    }
    
    for(let i = 0; i < len; i++) { 
        nums[i] = arr[i]; 
    }
    
};
