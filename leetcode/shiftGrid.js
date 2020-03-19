/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let rowSize = grid.length; 
    let colSize = grid[0].length;
    let idx = 0;
    let arr = new Array(rowSize*colSize);  
    for(let i = 0;i < rowSize;i++) { 
        for(let j = 0; j < colSize; j++) { 
            arr[idx++] = grid[i][j]; 
        }
    }
    let p = (k % arr.length); 
    idx = 0; 
    for(let i = 0; i < rowSize; i++) { 
        for(let j = 0; j < colSize; j++) { 
            grid[i][j] = arr[(idx+(arr.length- p)) % arr.length]; 
            idx++; 
        }
    }
    return grid; 
};


shiftGrid([[1],[2],[3],[4],[7],[6],[5]], 23); 
