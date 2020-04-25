function isMonotonic(array) {
	// Write your code here.
	let monotocity = null; 

	for(let i = 0; i < array.length - 1; i++) { 
		let diff = array[i] - array[i+1];
		if(monotocity === null) { 
			
			if(diff < 0) { 
				monotocity = 'INCREASE'
			}
			else if(diff > 0) { 
				monotocity = 'DECREASE'
			}
		}
		else if(monotocity === 'INCREASE'){
			if(diff > 0) return false; 
		}
		else if(monotocity === 'DECREASE') {
			if(diff < 0) return false;
		}
	}
	return true;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
