/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let str = "" + num;
    str = str.split("");
    
    for(let i = 0; i < str.length; i++) { 
        if(str[i] === '6') {
            str[i] = '9'; 
            break; 
        }
    }
    return parseInt(str.join(''))
};

let ans = maximum69Number(99)
console.log(ans); 