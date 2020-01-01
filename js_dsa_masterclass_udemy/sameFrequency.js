/**
 * Approach: Frequency Counter Pattern 
 * Time Complexity: O(n)
 */

function sameFrequency(num1, num2) { 
    let temp = num1; 
    let arrMap = [];

    for(let i = 0; i <= 10; i++)
        arrMap[i] = 0; 

    while(temp !== 0){
       arrMap[temp % 10] += 1;  
       temp = Math.floor(temp / 10); 
    }

    temp = num2; 
    
    while(temp !== 0) { 
        arrMap[temp % 10] += 1; 
        temp = Math.floor(temp / 10); 
    }

    for(let val of arrMap) { 
        if(val % 2 !== 0)
            return false; 
    }

    return true; 
}


let ans = sameFrequency(182, 281); 
console.log(ans); 