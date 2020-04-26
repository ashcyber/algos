function longestPeak(array) {
  // Write your code here.
  let arr = [...array]
  let i = 1;
  let maxPeak = 0;;
  while(i <= array.length - 2) { 
  
    if(arr[i-1] < arr[i]  && arr[i] > arr[i+1]) {
      let peakCount = 1; 
      let j = i; 

      while(arr[j-1] < arr[j]){
        peakCount++; 
        j--; 
      }

      j = i; 

      while(arr[j] > arr[j+1]) { 
        peakCount++; 
        j++;
      }
      
      maxPeak = Math.max(maxPeak, peakCount); 
    }
    i++; 
  }
  return maxPeak;
}


// Do not edit the line below.
exports.longestPeak = longestPeak;
