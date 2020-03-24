/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    let row_size = M.length; 
    let col_size = M[0].length; 
    
    let cpyM = new Array(row_size);
    for(let i = 0; i < row_size; i++) { 
      cpyM[i] = new Array(col_size); 
    }
    let dir_r = [0,-1,-1,0,1,1,1,0,-1] 
    let dir_c = [0,0,1,1,1,0,-1,-1,-1]; 
    
    for(let r = 0; r < row_size; r++) { 
      for(let c = 0; c < col_size; c++) { 
        let sum = 0; 
        let count = 0; 
        for(let d = 0; d < dir_r.length; d++) {
          let cur_row = r + dir_r[d];  
          let cur_col = c + dir_c[d]; 
          if((cur_row >= 0 && cur_row < row_size) 
            && (cur_col >= 0 && cur_col < col_size)) { 
              sum += M[cur_row][cur_col];  
              count++; 
            }
        }
        cpyM[r][c] = Math.floor(sum/count); 
      }
    }
    return cpyM; 
};