var isHappy = function(n) {
    let n_val = n; 
    let hash = {}; 
    while(n_val !== 1) { 
        
        let temp = n_val; 
        let sum = 0; 
        while(temp > 0) { 
            sum += (temp % 10)**2; 
            temp = Math.floor(temp / 10); 
        }
        n_val =  sum;
        if(hash[sum] === undefined) {
            hash[sum] = 1;
        }else{
            return false; 
        }
    }

    return true; 
};