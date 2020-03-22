var validMountainArray = function(arr) {
    let i = 0; 
    let isAscending = true;
    let incExists = false; 
    let decExists = false; 
    while( i < arr.length - 1) {https://github.com/ashcyber/algos
        if(isAscending) { 
            if(arr[i] > arr[i+1]) { 
                isAscending = false; 
            }
            else if(arr[i] === arr[i+1]) { 
                return false; 
            }else{
                incExists = true; 
                i++; 
            }
        }else {
            if(arr[i] < arr[i+1] || arr[i] === arr[i+1]){
                return false; 
            }
            i++; 
            decExists = true; 
        }
         
    } 
    return incExists && decExists; 
};
