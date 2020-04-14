function twoNumberSum(array, targetSum) {
  // Write your code here.
	let hm = {}; 
		
	for(const num of array) { 
		if(num in hm)  
			return [num, hm[num]]
		hm[targetSum - num] = num
	}
	
	return [];
}
