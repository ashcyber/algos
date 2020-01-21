var nextGreaterElement = function(nums1, nums2) {
    let result = new Array(nums1.length); 
    for(let i = 0; i < nums1.length; i++) { 
        let idx = nums2.indexOf(nums1[i]); 
        if(idx === -1) { 
            result[i] = -1; 
        }else {
            result[i] = -1; 
            for(let j = idx+1; j < nums2.length; j++) { 
                if(nums2[idx] < nums2[j]) { 
                    result[i] = nums2[j]; 
                    break; 
                }
            }
        }
    }
    return result; 
};
