var rob = function(nums) {
    let arr = [...nums]; 
    if(nums.length === 0) return 0; 
    if(nums.length === 1) return nums[0]; 
    if(nums.length === 2) return Math.max(nums[0], nums[1]); 

    arr[1] = Math.max(arr[0], arr[1]); 

    for(let i = 2; i < nums.length; i++) { 
        arr[i] = Math.max(arr[i - 2] + arr[i], arr[i-1]) ;          
    }
    return arr.pop();     
};