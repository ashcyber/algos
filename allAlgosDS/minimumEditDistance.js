function minimumEditDistance(start, end) { 
    start = " " + start 
    end = " " + end
    let memo = new Array(start.length)
    for(let i = 0; i < start.length; i++) { 
        memo[i] = new Array(end.length)
    }

    for(let i = 0; i < start.length; i++){
        memo[i][0] = i; 
    }

    for(let j = 0; j < end.length; j++) {
        memo[0][j] = j; 
    }

    for(let i = 1; i < start.length; i++) {
        for(let j = 1; j < end.length; j++) {

            if(start[i] === end[j]) { 
                memo[i][j] = memo[i-1][j-1]; 
            }
            else {
                let arr = [
                    [memo[i-1][j-1], -1,-1],
                    [memo[i-1][j], -1,0],
                    [memo[i][j-1],0,-1]
                ]
                arr.sort((a,b) => a[0] - b[0]);
                memo[i][j] = memo[i+arr[0][1]][j+arr[0][2]] + 1; 
            }
        } 
    }
    return memo[start.length-1][end.length - 1]
}

