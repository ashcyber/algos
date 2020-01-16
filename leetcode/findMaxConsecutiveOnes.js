/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let i = 0; 
    let maxCount = 0; 
    while(i < nums.length){ 
        let j = i; 
        let count = 0; 
        while(nums[j] === 1 &&  j < nums.length) {  
            j++; 
            count++; 
        }

        if(i === j) { 
            i++
        }else {
            maxCount = Math.max(maxCount, count)
            i = j; 
        }
    }

    return maxCount; 
};

let ans = findMaxConsecutiveOnes([1,1,1,1,1,1,0,0,1,1,1])
console.log(ans); 