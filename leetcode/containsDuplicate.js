var containsDuplicate = function(nums) {
  if(nums.length <= 1) return false; 
  let hm = {};  
  for(let i = 0; i < nums.length; i++) { 
      if(!hm[nums[i]]){
          hm[nums[i]] = 1; 
      } 
      else{
          return true; 
      }
  }
  return false;
};