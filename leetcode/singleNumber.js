var singleNumber = function(nums) {
    let hashMap = {};

    for(let i = 0; i < nums.length; i++){ 
        if(!hashMap[nums[i]]) { 
            hashMap[nums[i]] = 1; 
        }
        else{
            delete hashMap[nums[i]]; 
        }
    }
    return  parseInt(Object.keys(hashMap)[0]); 

};