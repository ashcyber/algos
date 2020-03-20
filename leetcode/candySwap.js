/**
 * bobSum - B[j] + A[i] = aliceSum + B[j] - A[i]; 
 * bobSum-aliceSum + 2*A[i] = 2*B[j]; 
 * (bobSum-aliceSum)/2 + 2*A[i]/2 = B[j]; 
 * => B[j] = (bobSum-aliceSum)/2 + A[i]; 
 */

var fairCandySwap = function(A, B) {
    function sum(arr) {return arr.reduce((a,b) => a + b, 0)}
    let aliceSum = sum(A);  
    let bobSum = sum(B); 
    let bobSet = new Set(B); 
    let dif = Math.floor((bobSum - aliceSum)/2); 
    for(let i = 0; i < A.length; i++) {
        if(bobSet.has(dif+A[i])){
            return [A[i], dif+A[i]]; 
        } 
    }  
};


let ans = fairCandySwap([1,1], [2,2])
console.log(ans); 