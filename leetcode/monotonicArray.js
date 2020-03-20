var isMonotonic = function(A) {
    if(A.length === 1) return true;
    let isGreater = false; 
    let isLesser = false; 

    for(let i = 1 ; i < A.length; i++) {
        if(A[i-1] < A[i]) { 
            isLesser = true; 
        }

        if(A[i-1] > A[i]) { 
            isGreater = true; 
        }

        if(isGreater && isLesser) { 
            return false; 
        }
    }

    return true; 
};
