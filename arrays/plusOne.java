/*
    difficulty: easy 
    Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
    For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
    the contiguous subarray [4,-1,2,1] has the largest sum = 6.
*/
public int[] plusOne(int[] digits){
    for(int i = digits.length - 1; i >= 0; i--){
        if(digits[i] < 9){
            digits[i]++; 
            return digits; 
        }
        digits[i] = 0; 
        /*
            create a new integer to set first element 
            to one. 
        */
    }
    int[] new_digits = new int[digits.length + 1];
    new_digits[0] = 1; 
    
    return new_digits; 
}