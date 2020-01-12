var pivotIndex = function(nums) {
    let totalLeft = 0; 
    let totalRight = 0; 
    let pivotIndex = -1; 
    for(let i = 0; i < nums.length; i++) 
        totalLeft+=nums[i];
    
    for(let i = nums.length - 1; i >= 0; i--) { 
        if(totalRight === totalLeft - (totalRight + nums[i])) { 
            pivotIndex = i;  
        }
        totalRight += nums[i]; 
    }
    return pivotIndex;
};


let ans = pivotIndex([1,2,1]); 
console.log(ans); 