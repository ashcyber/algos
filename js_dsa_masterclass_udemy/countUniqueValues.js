let countUniqueValues = (arr) => { 
    let i = 0;  
    let j = 1;  
    let uniqCount = 0; 

    while(i < arr.length){
        j = i + 1; 
        while(j < arr.length && arr[j - 1] === arr[j]){
            j++; 
        }
        uniqCount++; 
        i = j; 
    }
    return uniqCount; 
}


