/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let counter = new Array(nums.length + 1).fill(0); 
    let arr = []; 

    for(let i = 0; i < nums.length; i++) { 
        counter[nums[i]]++; 
    } 

    for(let i = 1; i <= nums.length; i++) { 
        if(counter[i] === 0) arr.push(i); 
    }

    return arr; 
};

var findDisappearedNumbersOptimized = function(nums){
	let arr = []; 
    for(let i = 0; i < nums.length; i++){ 
        let idx = Math.abs(nums[i]) - 1;
        if(nums[idx] > 0) 
            nums[idx] = -nums[idx]; 
    }
    console.log(nums); 
    for(let i = 0; i < nums.length; i++) { 
        if(nums[i] >= 0) { 
            arr.push(i+1); 
        }
    }

    return arr; 
}