/*
	difficulty: easy 
	Rotate an array of n elements to the right by k steps.
	For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].	
*/
public void rotate(int[] nums, int k){
    int[] r = new int[nums.length]; 
    
    for(int i=0; i <nums.length; i++){
        r[i] = (nums[(i+(nums.length - k))%nums.length]);
    }
    
    System.out.println(Arrays.toString(r));
}