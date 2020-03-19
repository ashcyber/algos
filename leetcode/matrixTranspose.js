var transpose = function(A) {
    let colSize = A[0].length; 
    let rowSize = A.length; 

    let transposeMatrix = new Array(colSize) ; 
    for(let i = 0; i < transposeMatrix.length; i++){
        transposeMatrix[i] = new Array(rowSize); 
    }

    for(let i = 0; i < rowSize; i++) { 
        for(let j = 0; j < colSize; j++) { 
            transposeMatrix[j][i] = A[i][j]; 
        }
    }
   return transposeMatrix; 
};


