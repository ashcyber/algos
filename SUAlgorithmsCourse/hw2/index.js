const fs = require('fs'); 
function swap(arr, i,j)  { 
    let temp = arr[i]; 
    arr[i]= arr[j]; 
    arr[j]= temp; 
}

let comparisons = 0; 

function partitionByFirst(arr, l, r) {
    comparisons += (r - l) ;  
    let pivot = arr[l]; 
    let i = l + 1; 
    for(let j = l + 1; j <= r; j++) { 
        if(arr[j] < pivot) { 
            swap(arr,j, i); 
            i++; 
        } 
    }
    swap(arr,l, i - 1); 
    return i - 1; 
}


function partitionByLast(arr, l, r) { 
    comparisons += (r-l)
    swap(arr, l, r); 
    let pivot = arr[l]; 
    let i = l + 1; 

    for(let j = l + 1; j <= r; j++) { 
        if(arr[j] < pivot) { 
            swap(arr,j, i); 
            i++; 
        } 
    }
    swap(arr,l, i - 1); 
    return i - 1; 
}

function partitionByMedian(arr, l, r) {  
    comparisons += (r-l)
    let len = (r-l+1);  
    let mid = len % 2 === 0 ? Math.floor(len / 2) - 1 : Math.floor(len / 2)
    mid = mid + l; // note this 
    let a = [l,mid,r].sort((a,b) => arr[a] - arr[b]);   
    swap(arr, l, a[1]); 
    let pivot = arr[l]; 
    let i = l + 1; 

    for(let j = l + 1; j <= r; j++) { 
        if(arr[j] < pivot) { 
            swap(arr,j, i); 
            i++; 
        } 
    }
    swap(arr,l, i - 1); 
    return i - 1; 
}


function quickSort(arr,l,r) {
    if(l < r) { 
        let pivot = partitionByMedian(arr,l,r); 
        quickSort(arr, pivot+1, r);  
        quickSort(arr, l, pivot-1);        
    }
}

const data = fs.readFileSync('test.txt').toString();
let arr = data.split('\n').map(val => parseInt(val));  

quickSort(arr, 0, arr.length - 1); 
console.log(comparisons);


