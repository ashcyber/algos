var longestPalindrome = function(s) {
  let map = new Map();  
  for(let i = 0; i < s.length; i++) { 
    if(!map.has(s[i])) { 
      map.set(s[i], 0); 
    }
    map.set(s[i], map.get(s[i])+1); 
  }
  let charSumOdd = 0;  
  let charSumEven = 0;
  let oddFound = false; 
  map.forEach((value, key) => {
    if(value % 2 === 0){
      charSumEven += value;
    }  
    else {
      charSumOdd += (value - 1); 
      oddFound = true; 
    }
  })
  if(!oddFound) {
    return charSumEven
  }
  return charSumEven + charSumOdd + 1;   
};