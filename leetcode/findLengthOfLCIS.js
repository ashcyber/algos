var findLengthOfLCIS = function(nums) {
  let i = 0; 
  longestInc = 0; 
  while(i < nums.length){
    let j = i + 1
    let k = i; 
    while(nums[k] < nums[j] && j < nums.length) { 
      k++; j++; 
    }
    longestInc = Math.max(longestInc, j - i); 
    i = j; 
  }  
  return longestInc;   
};