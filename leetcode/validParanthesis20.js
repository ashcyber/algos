/**
 * @param {string} s
 * @return {boolean}
 */
function isPush(c) { 
    if(c === '(' || c === '[' || c === '{')
        return true; 
    return false; 
}

function getOpposite(c) {
    switch(c){ 
        case '(': 
            return ')'; 
        case '[': 
            return ']'; 
        case '{': 
            return '}'; 
    }
}

var isValid = function(s) {
    let arrS = s.split(''); 
    let stack = []; 
    let valid = true; 
    arrS.forEach((char) => {
        if(isPush(char) === true) { 
            stack.push(char) 
        }else{
            let curC = stack.pop();  
            if(getOpposite(curC) !== char) {  
                return (valid = false); 
            }
        }
    })
    
    valid = valid && (stack.length === 0); 

    return valid
};
