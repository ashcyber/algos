var searchInsert = function(nums, target) {
    let i = 0; 
    let j = nums.length !== 0 ? nums.length - 1 : 0; 
    let mid =  Math.floor((i + j) / 2);

    while(i <= j) { 
        mid = Math.floor((i + j) / 2);  
        if(target < nums[mid]) { 
            j = mid - 1; 
        }
        else if(target > nums[mid]){
            i = mid + 1; 
        }
        else break; 
    }
    if(nums[mid] !== undefined) { 
        if(target <= nums[mid]) { 
            return mid
        }
        return mid+1; 
    }
    return 0; 
};