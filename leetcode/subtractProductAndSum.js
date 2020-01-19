/**
 * @param {number} n
 * @return {number}
 */
 
var subtractProductAndSum = function(n) {
    let sum = 0; 
    let product = 1; 
       
    let temp = n; 
    while(temp > 0) { 
        sum += temp % 10; 
        product *= temp % 10; 
        temp = Math.floor(temp / 10); 
    }
    return product - sum; 
};