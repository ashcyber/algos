/**
 * @param {number[]} prices
 * @return {number}
 */

// Uses eratosthenes sieve
var countPrimesOptimized = function(n) {
    let primeArr = new Array(n).fill(1); 
    primeArr[0] = 0; 
    primeArr[1] = 0; 
    let limit = Math.floor(Math.sqrt(n)); 
    for(let i = 2; i <= limit; i++) { 
        if(primeArr[i] === 1) {
            for(let j = 2; i*j < n; j++){
                primeArr[i*j] = 0; 
            }
        }
    }
    return primeArr.filter((val) => val === 1).length;  
}


// slightly optimized naive prime counter 
let isPrime = (num) => {
    let limit = Math.floor(Math.sqrt(num)); 
    for(let i = 3; i <= limit; i+=2){
        if(num % i === 0)
            return false; 
    }
    return true; 
}

var countPrimes = function(n) {
    let cnt = 0;  
    if(n > 2){
        cnt = 1; 
    }
    for(let i = 3; i < n; i+=2) { 
        if(isPrime(i)) cnt++; 
    }
    return cnt; 
}
