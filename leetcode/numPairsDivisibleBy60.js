/**
 * Whenever Q mentions "pairs" think about combination 
 * here we use formula n!/((r!)(n-r)!)
 * which simplifies by substituting r = 2 as 
 * n!/((2)(n-2)!) == n*(n-1) / 2  
 */
var numPairsDivisibleBy60 = function(time) {
  let count = 0; 
  let arr = new Array(60).fill(0);
  for(let i = 0; i < time.length; i++) { 
    arr[time[i] % 60]++; 
  }

  for(let i = 1; i < 30; i++) { 
    count += arr[i] * arr[60-i]; 
  } 
  count += arr[0]*(arr[0]-1) /2; 
  count += arr[30]*(arr[30]-1)/2; 
  
  return count; 
};

numPairsDivisibleBy60([30,20,150,100,40])