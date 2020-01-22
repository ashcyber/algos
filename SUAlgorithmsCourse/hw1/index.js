const fs = require('fs'); 
const readline = require('readline');

function countInversions(arr) { 
    let inversions = 0; 
    function mergeSort(arr) {
        if(arr !== undefined) {
            if(arr.length === 1) {  
                return arr; 
            }
        
            let mid = Math.floor(arr.length / 2) 
            let left = mergeSort(arr.slice(0,mid)); 
            let right = mergeSort(arr.slice(mid));
        
            return merge(left, right, count=0); 
        }
    }

    function merge(left, right, count) { 
        if(left === undefined && right === undefined) return []; 
        if(right === undefined) return left; 
        if(left === undefined) return right; 
        
        let i = 0; 
        let j = 0;
        let k = 0;  
        let arr = new Array(left.length + right.length)
    
        while(i < left.length && j < right.length) { 
            if(left[i] < right[j]) { 
                arr[k++] = left[i++]; 
            }
            else {
                arr[k++] = right[j++];
                inversions += left.length - i;  
            }
        }
    
        while(i < left.length) { 
            arr[k++] = left[i++]; 
        }
    
        while(j < right.length) {
            arr[k++]  = right[j++]; 
        }
    
        return arr; 
    }

    mergeSort(arr); 
    return inversions; 
}
const data = fs.readFileSync('test.txt').toString();
let arr = data.split('\n').map(val => parseInt(val));  
let ans = countInversions(arr); 
console.log(ans); 