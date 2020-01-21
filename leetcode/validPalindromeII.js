
function isPalindrome(str) { return str === str.split('').reverse().join(''); }

var validPalindrome = function(s) {
    let i = 0; 
    let j = s.length - 1; 
    if(isPalindrome(s)) { 
        return true; 
    }

    while(i <= j) { 
        if(s[i] !== s[j]) { 
            if(isPalindrome(s.slice(i,j)) || isPalindrome(s.slice(i+1,j+1))) { 
                return true; 
            }
            return false; 
        }else{
            i++; 
            j--; 
        }
    }
    return true; 
};

let ans = validPalindrome("cbbcc"); 
console.log(ans); 