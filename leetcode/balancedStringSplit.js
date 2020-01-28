var balancedStringSplit = function(s) {
    let b = 0; 
    let counter = 0; 
    let i = 0; 
    while(i < s.length) { 
        if(s[i] === 'L') b--; 
        else if(s[i] === 'R') b++; 
        if(b === 0) counter++; 
        i++; 
    }

    return counter; 
};
