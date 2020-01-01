/**
 * Time complexity : O(N)
 * Approach: Sliding Window Pattern 
 */

function maxSubArraySum(arr, num) {
    let maxSum = 0; 
    let tempSum = 0; 

    if(arr.length < num) return null; 

    for(let i = 0; i < num; i++) {
        maxSum += arr[i]; 
    }
    tempSum = maxSum; 

    for(let i = num; i < arr.length; i++){
        tempSum = tempSum + arr[i] - arr[i - num]; 
        maxSum = Math.max(tempSum, maxSum); 
    }


     return maxSum; 
}


maxSubArraySum([2,6,9,2,1,8,5,6,3], 3); 