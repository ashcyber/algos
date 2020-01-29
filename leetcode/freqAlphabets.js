/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let str = []; 
    let arr = s.split(''); 
    for(let i = s.length; i >= 0;) { 

        if(s[i] === '#') { 
            let code = 96 + parseInt(s.slice(i-2,i)); 
            str.push(String.fromCharCode(code)); 
            i -= 3; 
        } 
        else{
            let code = 96 + parseInt(s[i]); 
            if(code) 
                str.push(String.fromCharCode(code));
            i--; 
        }
    }

    return str.reverse().join(''); 
    
};

freqAlphabets("12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"); 
