/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    let initialMatrix = new Array(n); 

    for(let row = 0; row < n; row++) { 
        initialMatrix[row] = new Array(m).fill(0); 
    }

    for(let i = 0; i < indices.length; i++) { 
        let [r,c] = indices[i]; 

        for(let col = 0; col < m; col++) { 
            initialMatrix[r][col] += 1; 
        }

        for(let row = 0; row < n; row++) { 
            initialMatrix[row][c] += 1;
        }
    }
    
    let oddCount = 0; 
    for(let i = 0; i < n; i++) { 
        for(let j = 0; j < m; j++) { 
            if(initialMatrix[i][j] % 2 !== 0){
                oddCount+=1; 
            }
        }
    }

    return oddCount; 
};