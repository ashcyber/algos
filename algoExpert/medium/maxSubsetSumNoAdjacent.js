function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
  let sum = new Array(array.length).fill(0);

  if(array.length === 0){
    return 0;
  }
  else if(array.length === 1) { 
    return array[0]
  }
  else if(array.length === 2) {
    return Math.max(array[0], array[1]);
  }
  else {
    sum[0] = array[0]; 
    sum[1] = Math.max(array[1], array[0]); 
    for(let i = 2; i < array.length; i++) { 
      sum[i] = Math.max(sum[i-1], sum[i-2] + array[i]) 
    }
  }
  return sum.slice(-1)[0]
}