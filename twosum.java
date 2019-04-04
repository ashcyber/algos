/*
    problem statement:
    difficulty: easy 
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.    
*/

public int[] twoSum(int[] nums, int target){
    int[] arr = {-1,-1}; 
    /*
        Hash Key: target-num[i]
            - we can store the second sum pair as key 
        Hash val: i 
            - index of the first pair 
    */
    HashMap<Integer,Integer> hm = new HashMap<Integer, Integer>();
    
    for(int i=0; i < nums.length; i++){
        /*
            if there exists a key with given nums[i] 
            that means we found the pair.  
        */
        if(hm.get(nums[i]) != null){
            arr[0] = hm.get(nums[i]); 
            arr[1] = i; 
            return arr; 
        }
        /*
            value for hash is initialized here    
        */
        hm.put(target - nums[i], i); 
    }
    
    return arr; 
}