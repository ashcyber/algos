/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

var hammingDistance = function(x, y) {
    let str = (x ^ y).toString(2); 
    let h_d = 0; 
    for(let i = 0; i < str.length; i++) { 
        if(str[i] === '1') {
            h_d+=1; 
        } 
    }
    return h_d; 
};
