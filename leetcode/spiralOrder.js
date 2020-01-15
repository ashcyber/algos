/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length === 0 ) return matrix; 

    let rowStart = 0; 
    let colStart = 0; 
    let rowEnd = matrix.length - 1; 
    let colEnd = matrix[0].length -1; 

    let result = [];
    while(rowStart <= rowEnd && colStart <= colEnd) {
        for(let i = colStart; i <= colEnd; i++){
            result.push(matrix[rowStart][i]); 
        }
        rowStart++; 

        for(let i = rowStart; i <= rowEnd; i++) {
            result.push(matrix[i][colEnd])
        }
        colEnd--; 

        if(rowStart <= rowEnd) { 
            for(let i = colEnd; i >= colStart; i--) {
                result.push(matrix[rowEnd][i]); 
            }
        
            rowEnd--; 
        }

        if(colStart <= colEnd) {
            for(let i = rowEnd; i >= rowStart; i--) { 
                result.push(matrix[i][colStart]); 
            }

            colStart++; 
        }


    }
    return result; 

}
