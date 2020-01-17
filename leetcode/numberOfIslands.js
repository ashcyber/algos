var numIslands = function(grid) {
    if(grid.length === 0 || grid === null) { 
        return null; 
    }

    let num_isle = 0; 
    for(let i = 0; i < grid.length; i++) { 
        for(let j = 0; j < grid[i].length; j++) {  
             if(grid[i][j] === "1") { 
                num_isle += dfs(i,j, grid); 
             }
        }
    }
    return num_isle; 
};


var dfs = function(i, j, grid) {  
    if((i < 0 || i >= grid.length || j < 0 || j >= grid[i].length) ||  (grid[i][j] === "0")){
        return 0; 
    }
    grid[i][j] = "0"; 

    dfs(i-1, j, grid); 
    dfs(i,j+1, grid); 
    dfs(i+1,j, grid);
    dfs(i, j-1, grid); 

    return 1; 
}