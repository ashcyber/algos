/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */

function calcFrequency(word) { 
    let arr = new Array(26).fill(0); 
    let smallestCharCode = 27; 
    for(let i= 0; i < word.length; i++){
        let val = word[i].charCodeAt(0) - "a".charCodeAt(0)
        arr[val]++;
        smallestCharCode = Math.min(smallestCharCode,val); 
    }    
    if(smallestCharCode === 27) return 0; 
    return arr[smallestCharCode];  
}

var numSmallerByFrequency = function(queries, words) {
    let wordFrequencies = new Array(11).fill(0);
    let wordFreqCumulative = new Array(11).fill(0); 
    for(let i = 0; i < words.length; i++){ 
        wordFrequencies[calcFrequency(words[i])]++; 
    } 
    for(let i = wordFrequencies.length - 2; i >= 0; i--){
        wordFreqCumulative[i] += wordFreqCumulative[i+1] + wordFrequencies[i+1]; 
    }
    
    let answer = new Array(queries.length); 
    for(let q = 0; q < queries.length; q++){ 
        let fq = calcFrequency(queries[q]); 
        answer[q] = wordFreqCumulative[fq];  
    }
    return answer
};
