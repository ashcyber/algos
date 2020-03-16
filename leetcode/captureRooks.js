/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    rookRow = null; 
    rookColumn = null; 

    for(let row = 0; row < board.length; row++) { 
        for(let col = 0; col < board[0].length; col++) { 
            if(board[row][col] === 'R'){
                rookColumn = col; 
                rookRow = row; 
                break; 
            }
        }
    }
    totalCount = 0; 

    // Top Traverse 
    for(let row = rookRow; row > 0 ; row--){
        if(board[row][rookColumn] === 'B') break; 
        if(board[row][rookColumn] === 'p') {
            totalCount++; 
            break; 
        }
    }

    // Down Traverse 
    for(let row = rookRow; row < board.length; row++) { 
        if(board[row][rookColumn] === 'B') break;    
        if(board[row][rookColumn] === 'p') {
            totalCount++; 
            break; 
        }
    }


    // Left Traverse 
    for(let col = rookColumn; col > 0; col--) { 
        if(board[rookRow][col] === 'B') break; 
        if(board[rookRow][col] === 'p'){
            totalCount++; 
            break; 
        }
    }

    // Right Traverse 
    for(let col = rookColumn; col < board[0].length; col++) { 
        if(board[rookRow][col] === 'B') break; 
        if(board[rookRow][col] === 'p'){
            totalCount++; 
            break; 
        }
    }

    return totalCount; 
};
