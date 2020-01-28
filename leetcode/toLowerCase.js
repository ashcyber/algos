/**
 * @param {string} str
 * @return {string}
 */
let getCode = (a) => a.charCodeAt(0);   
var toLowerCase = function(str) {
    let s = ""
    for(let i = 0; i < str.length; i++){ 
        let curCode = getCode(str[i]); 
        if(curCode >= 65 && curCode <= 90){ 
            s += String.fromCharCode(97 + (curCode - 65))
        }
        else {
            s += str[i]; 
        }
    }
    return s;  
};