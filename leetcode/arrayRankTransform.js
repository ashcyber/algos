var arrayRankTransform = function(inp) {
    if(inp.length === 0) return inp;  

    let rankMap = {}; 
    let r = 1; 
    let arr = [...inp].sort((a,b) => a-b); 
    for(let i = 0; i < arr.length; i++) {
        if(!rankMap[arr[i]]){
            rankMap[arr[i]] = r++;
        } 
    }
    let res = new Array(arr.length);;  
    for(let i = 0; i < arr.length; i++) { 
        res[i] = (rankMap[inp[i]]); 
    }

    return res; 
};


arrayRankTransform( [40,10,20,30])