/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let j = digits.length - 1;
    digits[j]++;  
    while(digits[j] >= 10) {
        digits[j] = digits[j] % 10;  
        if(j === 0) {
            digits.unshift(1); 
        }
        else {
            digits[j-1] = digits[j-1] + 1; 
        }
        j--; 
    } 
    return digits; 
};