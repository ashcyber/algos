function twoNumberSum(array, targetSum) {
	let hm = {}; 
	
	for(let i = 0; i < array.length; i++) { 
		let keyVal = targetSum - array[i]; 
		
		if(hm.hasOwnProperty(array[i])) 
			return [array[i], hm[array[i]]]
		
		hm[keyVal] = array[i]; 
	}
	
	return []; 
}

exports.twoNumberSum = twoNumberSum;
