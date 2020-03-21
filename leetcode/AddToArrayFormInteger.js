var addToArrayForm = function(A, K) {
    let arr = A.reverse();
    let n = A.length; 
    let carry = 0;
    arr[0] += K;   
    let i = 0; 
    while(arr[i] >= 10 || carry > 0){
        if(i >= n) arr[i] = 0; 
        arr[i] += carry; 
        carry = Math.floor(arr[i] / 10); 
        arr[i] = arr[i] % 10; 
        i++
    } 
    return arr.reverse(); 

};