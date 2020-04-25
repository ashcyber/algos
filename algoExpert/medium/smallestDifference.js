function smallestDifference(arrayOne, arrayTwo) {
	// Write your code here.
	arr1 = [...arrayOne].sort((a,b) => a-b); 
	arr2 = [...arrayTwo].sort((a,b) => a-b);

	let i = 0; 
	let j = 0; 
	let minDiff = Infinity;
	let minPairs = null;

	while( i < arr1.length && j < arr2.length) { 
		if(Math.abs(arr1[i] - arr2[j]) < minDiff){
			minDiff = Math.abs(arr1[i] - arr2[j]); 
			minPairs = [arr1[i], arr2[j]];
		}	

		if(arr1[i] === arr2[j]) { 
			i++; j++;
		}
		else if(arr1[i] < arr2[j]) { 
			i++;
		}
		else if(arr1[i] > arr2[j]) { 
			j++;
		}
	}

	return minPairs;
}
// Do not edit the line below.
exports.smallestDifference = smallestDifference;
