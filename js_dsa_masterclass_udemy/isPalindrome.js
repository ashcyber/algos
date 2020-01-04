function isPalindrome(str) { 
    
    
    let arr = str.split(''); 
    if(arr[0] !== arr[arr.length - 1]) { 
        return false; 
    }
    else if(arr.length === 1 || arr.length === 0) {
        return true; 
    }
    arr.pop(); 
    arr.shift();  
    return isPalindrome(arr.join('')); 

}
