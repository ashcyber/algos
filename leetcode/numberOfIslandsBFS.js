/**
 * @param {character[][]} grid
 * @return {number}
 */


let dirs = [{i: -1, j: 0 }, {i: 1, j: 0}, {i: 0, j: -1}, {i: 0, j: 1}]
var numIslands = function(grid) {
    if(grid.length === 0 || grid === null) { 
        return null; 
    }

    let num_isle = 0; 
    for(let i = 0; i < grid.length; i++) { 
        for(let j = 0; j < grid[i].length; j++) {  
             if(grid[i][j] === "1") { 
                num_isle += bfs(i,j, grid); 
             } 
        }
    }
    return num_isle; 
};


var bfs = function(i, j, grid) {  
    let q = []; 
    q.push([i,j]); 
    while(q.length !== 0) { 
        let cur = q.pop(); 
        grid[cur[0]][cur[1]] = '0';    
        for(val of dirs) { 
            let _i = cur[0] + val.i; 
            let _j = cur[1] + val.j;
            if((_i >= 0 && _i < grid.length) && (_j >= 0 && _j < grid[_i].length) && (grid[_i][_j] === '1')){
                q.push([_i, _j]); 
            }
        } 
    }
    return 1; 
}

let ans = numIslands([["1","0","1","1","0","1","1"]]);
console.log(ans); 