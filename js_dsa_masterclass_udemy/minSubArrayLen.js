function minSubArrayLen (arr, target) { 
    let minLen = Infinity; 
    let temp = arr[0];
    let tempLen = 1; 
    let startIndex = 0; 

    let i = 0; 

    while(i < arr.length) { 
        if(temp >= target) { 
            minLen = Math.min(minLen, tempLen); 
            
            temp -= arr[startIndex];
            startIndex++;  
            tempLen -= 1; 
        }
        else {
            i++;  
            temp += arr[i]; 
            tempLen++;
        }
    }
    return minLen !== Infinity ? minLen : 0 ; 
}

let ans = minSubArrayLen([2,1,3,5,4], 52); 
console.log(ans); 