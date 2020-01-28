var backspaceCompare = function(S, T) {
    return helperBackspace(S) === helperBackspace(T)    
};

var helperBackspace = function(a) {
 let str = a.split('');  
 let j = 0; 
 let charCounter = 0; 
 while( j < str.length) { 
     if(str[j] === '#' && charCounter > 0) { 
         for(let i = j ; i >= 0; i--) { 
             if(str[i] != '#' && str[i] !== '_') {
                 str[i] = '_'; 
                 charCounter--;
                 break;  
             }
         }
     }else{
         charCounter++; 
     }
     j++; 
 }
 return str.filter((val) => val !== '_' && val !== '#').join('')
}