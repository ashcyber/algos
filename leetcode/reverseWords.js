/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let word  = s.split(" "); 
    word = word.filter((val) => val !== ''); 
    return word.reverse().join(" "); 
};

let ans = reverseWords("the sky is     blue"); 
console.log(ans); 