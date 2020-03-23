var canThreePartsEqualSum = function(A) {
  let totalSum = A.reduce((a,b) => a+b,0); 
  let partSum = Math.floor(totalSum / 3); 
  let i = 0; 
  let curSum = 0; 
  countOfSumsToPart = 0; 
  while(countOfSumsToPart < 2 && i < A.length){
    curSum += A[i++]; 
    if(curSum === partSum) { 
      curSum = 0; 
      countOfSumsToPart++; 
    }
  }
  
  return (countOfSumsToPart === 2 && i < A.length); 
};