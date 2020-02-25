/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let charMap = {}; 
    let sum = 0; 
    
    // create the map
    for(let i = 0; i < chars.length; i++) { 
        if(charMap[chars[i]] === undefined) {
            charMap[chars[i]] = 1
        }
        else { 
            charMap[chars[i]]++; 
        }
    }
    
    
    for(let word of words){
        let cMap = {...charMap}; 
        let canForm = true; 
        for(let i = 0; i < word.length; i++){ 
            if(cMap[word[i]] === undefined || cMap[word[i]] === 0) { 
                canForm = false; 
                break; 
            }else { 
                cMap[word[i]]--; 
            }
        }
        
        if(canForm) sum += word.length; 
    }
    
    return sum; 
};