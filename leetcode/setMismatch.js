var findErrorNums = function(nums) {
    let sum = nums.length * (nums.length + 1) / 2; 
    let map = {}; 
    let res = new Array(2); 
    for(let i = 0; i < nums.length; i++) { 
        if(!map.hasOwnProperty(nums[i])){
            map[nums[i]] = 1;
            sum -= nums[i];  
        }else {
            res[0] = nums[i]; 
        }
    } 
    res[1] = sum; 
    return res; 
};
