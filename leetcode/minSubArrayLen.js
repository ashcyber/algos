/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {

    if(nums.length === 0) return 0; 

    let curSum = nums[0];  
    let i = 0; 
    let j = 1;
    let minSize = Infinity; 
    while(j <= nums.length && i < j) {
        if(curSum >= s) { 
            minSize = Math.min(minSize, j - i)
            curSum -= nums[i]; 
            i++; 
        }else { 
            curSum += nums[j]
            j++; 
        }
    }

    return minSize === Infinity ? 0 : minSize ; 
};

