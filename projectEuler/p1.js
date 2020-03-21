// Problem 1 :  Multiples of 3 and 5

function multiplesOf3and5(number) {
    let N = number - 1; 
    let n3 = (N - (N%3))  / 3
    let n5 = (N - (N%5)) / 5; 
    let n15 = (N - (N%15)) / 15; 
    
    let sum3 = (n3/2)*(3*(1+n3)); 
    let sum5 = (n5/2)*(5*(1+n5)); 
    let sum15 = (n15/2)*(15*(1+n15)); 

    return sum3+sum5-sum15; 
}