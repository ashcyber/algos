/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */

function isLexSorted(word1, word2, map) { 
  let i = 0; 
  let j = 0; 
  while(i < word1.length && j < word2.length){ 
    if(map[word1[i]] < map[word2[j]]){
      return true; 
    }
    else if(map[word1[i]] > map[word2[j]]){
      return false; 
    }
    i++; j++; 
  }
  if(word1.length <= word2.length){
    return true; 
  }
  return false; 
}

var isAlienSorted = function(words, order) {
    let map = {}
    let alienCharSet = order
    for(let i = 0; i < alienCharSet.length; i++) {  
      map[alienCharSet[i]] = i;  
    }
    for(let i = 0; i < words.length - 1; i++){
      if(!isLexSorted(words[i],words[i+1], map))
        return false
    }
    return true; 
};
