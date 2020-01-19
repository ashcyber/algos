var islandPerimeter = function(grid) {
    let perimeter = 0; 
    let dir = [[1,0],[0,1],[-1,0],[0,-1]]; 
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) { 
            if(grid[i][j] === 1) { 

               // Add Borders 
               if(j === 0) perimeter++;                            
               if(j === grid[i].length -1) perimeter++; 
               if(i === 0) perimeter++; 
               if(i === grid.length - 1) perimeter++;  
            
               // Add Surrounding 0's 
               for(let idx of dir) {
                   let a = i + idx[0]; 
                   let b = j + idx[1]; 

                   if(a >= 0 && a < grid.length  && b >= 0 && b < grid[i].length) { 
                       if(grid[a][b] === 0) perimeter++;   
                   }
               }
            }
        }
    }
    return perimeter; 
};