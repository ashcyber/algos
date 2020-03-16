var checkIfExist = function(arr) {
    let hm = {}; 
    
    for(let i = 0; i < arr.length; i++){
        
        if(hm[arr[i]*2]) return true; 
        if(hm[arr[i]/2]) return true; 
        
        hm[arr[i]] = true; 
    }
    
    return false; 
};