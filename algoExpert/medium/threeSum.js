function threeNumberSum(array, targetSum) {
	// Write your code here.
	let arr = [...array].sort((a,b) => a-b);
	let res = []; 
	for(let i = 0; i < array.length - 2; i++) { 
		let sum = targetSum - arr[i];
		let startIdx = i + 1; 
		let endIdx = arr.length - 1;

		while(startIdx <  endIdx) {
			if(sum === arr[startIdx] + arr[endIdx]) {
				res.push([arr[i], arr[startIdx], arr[endIdx]]);
				startIdx++;
				endIdx--;
			}
			else if(arr[startIdx] + arr[endIdx] < sum) {
				startIdx++;
			}
			else if(arr[startIdx] + arr[endIdx] > sum){
				endIdx--;
			}
		}
	}
	return res;
  }

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
