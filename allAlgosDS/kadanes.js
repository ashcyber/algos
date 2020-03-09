function kadane(arr) {
    for(let i = 1; i < arr.length; i++) { 
        arr[i] = Math.max(arr[i], arr[i] + arr[i-1]); 
    }
    return Math.max(...arr); 
}


let ans = kadane([-2,-3,4,-1,-2,1,5,-3])
console.log(ans); 