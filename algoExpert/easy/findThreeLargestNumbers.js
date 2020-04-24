function findThreeLargestNumbers(array) {
	// Write your code here.
	let firstMax = -Infinity; 
	let secondMax = -Infinity; 
	let thirdMax = -Infinity; 

	for(let item of array) { 
		if(item > firstMax) { 
			thirdMax = secondMax;
			secondMax = firstMax;
			firstMax = item; 
		}
		else if(item > secondMax) { 
			thirdMax = secondMax; 
			secondMax = item;
		}
		else if(item > thirdMax) { 
			thirdMax = item;
		}
	}

	return [thirdMax, secondMax, firstMax];
}