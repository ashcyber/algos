/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    let xyCount = 0; 
    let sumMaxRow = 0; 
    let sumMaxCol = 0; 
    
    for(let i = 0; i < grid.length; i++) {
        let maxRow = 0;  
        let maxCol = 0; 
        for(let j = 0; j < grid.length; j++ ) { 
            if(grid[i][j] !== 0) xyCount++; 
            
            if(grid[i][j] > maxRow)
                maxRow = grid[i][j]; 
            
            if(grid[j][i] > maxCol) 
                maxCol = grid[j][i]; 
        }
        
        sumMaxRow += maxRow; 
        sumMaxCol += maxCol; 
    }
    
    return xyCount + sumMaxRow + sumMaxCol; 
};