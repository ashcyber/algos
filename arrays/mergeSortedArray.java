/*
	difficulty: easy 
	Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
	Note:
	You may assume that nums1 has enough space (size that is greater or equal to m + n) 
	to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are
	m and n respectively

*/

public static void merge(int[] nums1, int m, int[] nums2, int n){
    int[] merge_arr = new int[n + m]; 
    int i = 0, j = 0, k = 0; 
    
    // compare elems of both arr at same index 
    while(i < m && j < n){
        if(nums1[i] < nums2[j]){
            merge_arr[k++] = nums1[i++]; 
        }else{
            merge_arr[k++] = nums2[j++]; 
        }
    }
    
    // copy remaining nums1 elements if any 
    while(i < m){
        merge_arr[k++] = nums1[i++]; 
    }
    
    // copy remaining nums2 elements if any 
    while(j < n){
        merge_arr[k++] = nums2[j++]; 
    }
    
    System.out.println(Arrays.toString(merge_arr));
}