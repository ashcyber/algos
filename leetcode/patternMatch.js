/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  str = str.split(' ');
  
  if(str.length !== pattern.length) return false; 

  let patternMap = {}; 
  let numPattern = []; 
  let id = 0; 
  for(let i = 0; i < pattern.length; i++) { 
    if(!patternMap.hasOwnProperty(pattern[i])) { 
      patternMap[pattern[i]] = id; 
      numPattern.push(id); 
      id++; 
    }else{
      numPattern.push(patternMap[pattern[i]])
    }
  }
  patternMap = {}
  id = 0; 
  
  for(let i = 0; i < str.length; i++) { 
    if(!patternMap.hasOwnProperty(str[i])) {
      patternMap[str[i]] = id++; 
    }
    if(patternMap[str[i]] !== numPattern[i]) return false; 
  }
  return true; 
};