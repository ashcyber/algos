var countElements = function(arr) {
    let hashMap = {};
    let count = 0;  
    for(let i = 0; i < arr.length; i++){ 
        if(!hashMap.hasOwnProperty(hashMap[arr[i]])){
            hashMap[arr[i]] = 0; 
        } 
        hashMap[arr[i]]++; 
    }

    for(let i = 0; i < arr.length; i++) { 
        if(hashMap.hasOwnProperty(arr[i] + 1)){ 
            count++; 
        }
    }
    return count;  
};
