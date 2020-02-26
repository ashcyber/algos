/**
 * @param {number[]} heights
 * @return {number}
 */

var sortArrayByParityII = function(A) {
    let i = 0; 
    let j = 1; 

    while(i < A.length) { 
        if(A[i] % 2 === 1){
            while(A[j] % 2 === 1) {
                j+=2; 
            }
            let temp = A[i]; 
            A[i] = A[j]; 
            A[j] = temp;  
        }
        i+=2; 
    }

    return A; 
};

let ans = sortArrayByParityII([4,2,5,7])
console.log(ans); 