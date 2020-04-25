function moveElementToEnd(array, toMove) {
	// Write your code here.
	let arr = [...array]; 


	let i = 0; 
	let j = i + 1; 

	while(j < arr.length) { 

		if(arr[i] === toMove && arr[j] === toMove) { 
			j++;
		}
		else if(arr[i] === toMove && arr[j] !== toMove) { 
			let temp = arr[i]; 
			arr[i] = arr[j]; 
			arr[j] = temp;
		}else{
			i++;j++;
		}
	}

	return arr; 
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
