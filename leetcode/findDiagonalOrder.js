var findDiagonalOrder = function(matrix) {
    let matSumGroup = {};
    let rows = matrix.length; 

    if(rows === 0) { 
        return [];
    }

    let cols = matrix[0].length; 

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){ 
            if(!matSumGroup[i+j]){
                matSumGroup[i+j] = []; 
            }

            matSumGroup[i+j].push([i,j]) 
        }
    }

    let keys = Object.keys(matSumGroup); 
    
    let result = []; 
    
    keys.forEach((val) => {
        if(val % 2 === 0){ 
            for(let i = matSumGroup[val].length - 1; i >= 0 ; i--) { 
                let index = matSumGroup[val][i];
                let r = matrix[index[0]][index[1]]; 
                result.push(r); 

            }
        }else { 
            for(let i = 0; i < matSumGroup[val].length; i++) { 
                let index = matSumGroup[val][i];
                let r = matrix[index[0]][index[1]]; 
                result.push(r); 
            }
        }
        
    })

    return result; 

}; 