var luckyNumbers  = function(matrix) {
    let rowMin = Infinity; 
    let colMax = -Infinity; 
    let rowHash = {}; 
    let res_arr = []; 

    for(let i = 0; i < matrix.length; i++) { 
        for(let j = 0; j < matrix[0].length; j++) { 
            rowMin = Math.min(rowMin, matrix[i][j]); 
        }
        rowHash[rowMin] = true; 
        rowMin = Infinity; 
    }

    for(let j = 0; j < matrix[0].length; j++) { 
        for(let i = 0; i < matrix.length; i++) { 
            colMax = Math.max(colMax, matrix[i][j]);
        }

        if(rowHash[colMax]) res_arr.push(colMax); 
        colMax = -Infinity;  
    }

    return res_arr; 
};