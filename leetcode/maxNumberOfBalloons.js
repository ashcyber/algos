var maxNumberOfBalloons = function(text) { 
  let ballon = "balloon".split(''); 

  charCounts = {}
  freqChar = {}
  
  ballon.map((val) => {
    if(!charCounts.hasOwnProperty(val)){
      charCounts[val] = 0; 
      freqChar[val] = 0; 
    }
    freqChar[val]++; 
  });

  for(let i = 0; i < text.length; i++){
    if(charCounts.hasOwnProperty(text[i])){
      charCounts[text[i]]++; 
    }
  }

  let minBallons = text.length; 
  ballon.forEach((val) => {
    minBallons = Math.min(Math.floor(charCounts[val] / freqChar[val]), minBallons); 
  })
  return minBallons;  
};
