/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let pascalRow = new Array(rowIndex+1).fill(0); 
    pascalRow[0] = 1; 
    if(rowIndex >= 1) { 
        for(let i = 1; i <= rowIndex+1; i++) { 
            for(let j = i-1; j >= 1; j--) { 
                pascalRow[j] += pascalRow[j-1];
            }
        }
    }
    
    return pascalRow; 
};