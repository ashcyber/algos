var uniqueMorseRepresentations = function(words) {
    let alphaArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];  
    let s = new Set(); 

    for(let i = 0 ; i < words.length; i++) { 
        let arr = words[i].split(''); 
        let str = ""
        for(let j = 0; j < arr.length; j++){
            str+= alphaArr[arr[j].charCodeAt(0) - 97]
        }
        s.add(str); 
    } 

    return Array.from(s).length; 
};