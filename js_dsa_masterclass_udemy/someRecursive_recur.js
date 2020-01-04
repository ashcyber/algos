function someRecursive(arr, callback) { 
    if(arr.length === 0)
        return false; 
    
    if(callback(arr[arr.length - 1]) === true)
        return true; 
    
    arr.pop(); 
    return someRecursive(arr,callback)
}

const isOdd = val => val % 2 !== 0; 

let ans = someRecursive([1,2,3,4], isOdd); 
console.log(ans); 