/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let fMax = -Infinity; 
    let sMax = -Infinity; 
    let tMax = -Infinity;
    
    nums = Array.from(new Set(nums))

    for(let i = 0; i < nums.length; i++){ 
        if(nums[i] >= fMax){
            tMax = sMax
            sMax = fMax;
            fMax = nums[i];
        }
        else if(nums[i] >= sMax) {
            tMax = sMax;  
            sMax = nums[i]; 
        }
        else if(nums[i] >= tMax) {
            tMax = nums[i]; 
        }
    }
    if(tMax !== -Infinity) return tMax; 
    return fMax; 
};