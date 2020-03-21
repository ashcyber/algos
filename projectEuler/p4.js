
function isPalindrome(n) { 
  let arr = `${n}`.split(''); 
  let rev = arr.reverse(); 
  return n === parseInt(rev.join('')); 
}
function largestPalindromeProduct(n) {
  let minD = Math.pow(10,(n-1));
  let maxD = Math.pow(10,n) - 1;
  let max = 0; 
  for(let i = maxD; i > minD; i--) { 
    for(let j = maxD; j > minD; j--) {  
        if(isPalindrome(i*j)) max = Math.max(max, i*j); 
    }  
  } 
  return max; 
}