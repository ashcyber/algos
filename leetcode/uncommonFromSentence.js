var uncommonFromSentences = function(A, B) {
    let arr = A.split(' ').concat(B.split(' '))
    let map = new Map(); 
    let res = []; 
    for(let i = 0; i < arr.length; i++) { 
        if(!map.has(arr[i])){
            map.set(arr[i], 1); 
        }
        else {
            let val = map.get(arr[i]); 
            map.set(arr[i],val+1); 
        }
    }
    
    map.forEach((value, key) => {
        if(value === 1){
            res.push(key); 
        }
    }) 
    return res; 
};