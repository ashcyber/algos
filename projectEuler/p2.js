// Problem 2: Even fibonnaci numbers 

function fiboEvenSum(n) {
    let a = 1; 
    let b = 1; 
    let c = a + b;
    let evenSum  = 0;   
    while(c < n) {
        if(c % 2 === 0){ evenSum += c; } 
        a = b; 
        b = c; 
        c = a + b; 
    } 
    return evenSum;
  }
  
fiboEvenSum(4000000)