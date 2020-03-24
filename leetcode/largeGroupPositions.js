var largeGroupPositions = function(S) {
  let i = 0;
  let res = []; 
  while(i < S.length) { 
    let j = i;
    let subLen = 0;  
    while(S[i] === S[j] && j < S.length) { 
      j++; subLen++;  
    }
    if(subLen >= 3){
      res.push([i,j-1])
    }
    i = j; 
  }
  

  return res; 
};

