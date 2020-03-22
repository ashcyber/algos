var findTheDifference = function(s, t) {
  let map = {} 
  for(let i = 0; i < s.length; i++) { 
    !map.hasOwnProperty(s[i]) ? map[s[i]] = 1 : map[s[i]]++; 
  } 
  for(let i= 0; i < t.length; i++) { 
    if(!map.hasOwnProperty(t[i]) || map[t[i]] === 0){
      return t[i]; 
    }
    map[t[i]]--; 
  } 
};