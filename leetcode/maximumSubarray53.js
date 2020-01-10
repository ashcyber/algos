var maxSubArray = function(nums) {
    let j = 1; 
    let gMax = nums[0]; 
    while(j < nums.length) { 
        nums[j] = Math.max(nums[j], nums[j] + nums[j - 1]); 
        if(nums[j] > gMax) { 
            gMax = nums[j]; 
        }
        j++; 
    }    
    return gMax; 
};