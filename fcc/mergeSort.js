function merge(left, right){
  let i = 0; 
  let j = 0; 
  let k = 0; 
  let mergeArr = []; 
  
  while( i < left.length && j < right.length){
    
    if(left[i] < right[j]){
      mergeArr[k] = left[i++];  
    }
    else{
      mergeArr[k] = right[j++]; 
    }
    k++; 
  }
  
  // copy remaining 
  while(i < left.length){
    mergeArr[k++] = left[i++];   
  } 

  while(j < right.length){
    mergeArr[k++] = right[j++]; 
  }

  return mergeArr; 
}

function mergeSort(array) {
  // change code below this line
    if(array.length <= 1){
      return array; 
    }

    let mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));  
    
    // change code above this line
    return merge(left, right); 
} 

let arr = mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
console.log(arr); 