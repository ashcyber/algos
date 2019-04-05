/*
	Difficulty: easy 
	Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
	For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
	the contiguous subarray [4,-1,2,1] has the largest sum = 6.
*/
public int maxSubArray(int[] nums){
    int g_max = Integer.MIN_VALUE; 
    int[] curr_max = new int[nums.length];
    
    g_max = curr_max[0] = nums[0]; 
    
    for(int i = 1; i < nums.length; i++){
        curr_max[i] = Math.max(nums[i], nums[i] + curr_max[i-1]);
        
        if(g_max < curr_max[i]){
            g_max = curr_max[i]; 
        }
    }
   
    return g_max; 
}
