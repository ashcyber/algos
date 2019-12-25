function pairwise(arr, arg) {
    let pairs = {}; 
    let i = 0; 
    while(i < arr.length - 1){
        let j = i + 1; 
        while(j < arr.length){
            if(arr[i] + arr[j] === arg){
                if(pairs[i] === undefined){    
                    pairs[i] = j; 
                    pairs[j] = i;
                }  
            }

            j++;  
        }
        i++; 
    }
    
    let arr_keys = Object.keys(pairs).map((val) => parseInt(val));

    if(arr_keys.length > 0){
        return arr_keys.reduce((a,b) => a + b); 
    }else{
        return 0; 
    }
}
