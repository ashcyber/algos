function partition(arr, l, r){
  let pivot = arr[r];
  let i= l, j = l; 

  while(j < r){ 
    if(arr[j] <= pivot){
      
      let temp = arr[j]; 
      arr[j] = arr[i]; 
      arr[i] = temp; 

      i++; 
    }
    j++; 
  }

  arr[r] = arr[i]; 
  arr[i] = pivot; 
  
  return i; 
}


function quickSortRoutine(array, l, r){
  if(l < r){
    let pivot = partition(array, l, r); 
    quickSortRoutine(array, l, pivot - 1)
    quickSortRoutine(array, pivot+1, r); 
  }
}

function quickSort(array) {
  let arr = [...array]; 
  quickSortRoutine(arr, 0, array.length - 1); 
  return arr; 
}

let arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]; 

console.log(quickSort(arr)); 

