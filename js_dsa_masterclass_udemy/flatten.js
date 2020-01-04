function flatten(arr) { 
    let nArr = []; 
    for(let i = 0; i < arr.length; i++) { 
        if(Array.isArray(arr[i])){
            nArr =  nArr.concat(flatten(arr[i]))
        }else{
            nArr.push(arr[i]); 
        }
    }

    return nArr; 
}

