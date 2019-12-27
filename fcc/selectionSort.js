function selectionSort(array) {
  // change code below this line
  for(let i = 0; i < array.length - 1; i++){
    let min_idx = i; 
    for(let j = i+1; j < array.length; j++){
      if(array[min_idx] > array[j]){
        min_idx = j; 
      }
    }

    let temp = array[i]; 
    array[i] = array[min_idx];
    array[min_idx] = temp;  
  }

  return array; 
  // change code above this line
}
