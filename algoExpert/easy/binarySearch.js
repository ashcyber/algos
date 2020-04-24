function binarySearch(array, target) {
	// Write your code here.
	  let low = 0; 
	  let high = array.length - 1; 
	  
	  while(low <= high) { 
		  let mid = Math.floor((low + high) / 2);

		  if(array[mid] === target) { 
			  return mid; 
		  }
		  else if(target < array[mid]) { 
			  high = mid - 1;
		  }

		  else if(target > array[mid]) { 
			  low = mid + 1;
		  } 
	  }

	  return -1; 
  }