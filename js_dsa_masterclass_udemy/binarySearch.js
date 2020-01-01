function binarySearch (arr, target) { 
    let low = 0; 
    let high = arr.length - 1; 
    let mid = undefined; 
    let loopCounter = 0; 
    
    while(low < high) {
        mid = Math.floor((low + high) / 2); 
        if(target === arr[mid]) 
            return true; 
        else if(target < arr[mid]) { 
            high = mid - 1; 
        }
        else if(target > arr[mid]) { 
            low = mid + 1; 
        }
    }
    return false;
}


let ans = binarySearch([1,2,3,4,5,6,7,9], 5); 
console.log(ans); 