function insertionSort(array) {
  let arr = [...array]; 

  for(let i = 0; i < arr.length; i++){
    let cur_index = i + 1; 
    let j = cur_index; 

    while(j > 0  && arr[j-1] > arr[j]){
      let temp = arr[j-1]; 
      arr[j-1] = arr[j]; 
      arr[j] = temp; 
      j--; 
    }
  }

  return arr; 
}

let arr = insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

console.log(arr); 