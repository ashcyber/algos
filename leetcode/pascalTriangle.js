/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows < 1 || !numRows) { 
        return []
    }
    else { 
        let pascal = [[1]]
        for(let i = 1; i < numRows; i++) { 
            let prevPascal = pascal[i-1];
            let newPascal = new Array(i+1); 
            for(let k = 0; k <= i; k++) { 
                if(k === 0) { 
                    newPascal[0] = 1; 
                }
                else if(k === i) { 
                    newPascal[k] = 1; 
                }
                else {
                    newPascal[k] = prevPascal[k-1] + prevPascal[k]; 
                }
            }
            pascal.push(newPascal); 
        }
        return pascal; 
    }
};

