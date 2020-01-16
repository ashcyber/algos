/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let j = 0; 
    while(j < nums.length) { 
        if(nums[j] === val) {
            nums.splice(j, 1);  
        } 
        else {
            j++; 
        }
    }
    return nums.length; 
};
