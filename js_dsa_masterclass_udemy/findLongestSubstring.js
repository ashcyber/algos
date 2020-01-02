/**
 * Q: Write a function called findLongestSubstring, 
 * which accepts a string and, 
 * returns the length of the longest susbtring with all distinct characters
 * Approach use map to record 
 * the last index of the seen element
 */

function findLongestSubstring(str) { 
  let longest = 0; 
  let start = 0; 
  let seen = {}; 

  for(let i = 0; i < str.length; i++) { 
    if(seen[str[i]]) { 
      start = Math.max(start, seen[str[i]]);
    }
    longest = Math.max(longest, i - start + 1); 
    seen[str[i]] = i + 1; 
  }
    return longest; 
}


let ans = findLongestSubstring("longestsubstring"); 
console.log(ans); 
