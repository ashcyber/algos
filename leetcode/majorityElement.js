var majorityElement = function(nums) {
   let dict = {}; 
   let len = nums.length / 2;  
   for(let i = 0; i < nums.length; i++){ 
       if(dict[nums[i]] === undefined){
           dict[nums[i]] = 1;
        }  
        else {
            dict[nums[i]]++;    
       }
       if(dict[nums[i]] > len){
           return nums[i]; 
       }
   }
};
