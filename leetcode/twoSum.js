/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
      let dict = {}; 
    
      for(let i = 0; i < nums.length; i++) {  
          let val = dict[nums[i]]; 

          if(val !== undefined)
            return [val, i];  
          
          dict[target - nums[i]] = i; 
      }
};