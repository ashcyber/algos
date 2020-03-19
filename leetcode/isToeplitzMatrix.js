var isToeplitzMatrix = function(matrix) {
    if(matrix.length === 0) return; 

    let rowSize = matrix.length; 
    let colSize = matrix[0].length; 
    
    for(let i = 0; i < rowSize - 1; i++){
        for(let j = 0; j < colSize - 1; j++) {
            if(matrix[i][j] !== matrix[i+1][j+1]){
                return false; 
            }
        }
    }
    return true;
};