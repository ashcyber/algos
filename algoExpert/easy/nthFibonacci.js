function getNthFib(n) {
	// Write your code here.
	  let f0 = 0; 
	  let f1 = 1; 	
	  let c; 
	  if(n === 1) return f0; 
	  if(n === 2) return f1;

	  for(let i = 2; i < n; i++) { 

		  c = f0 + f1; 
		  f0 = f1; 
		  f1 = c; 
	  }
	  
	  return c; 
  }

// Do not edit the line below.
exports.getNthFib = getNthFib;
