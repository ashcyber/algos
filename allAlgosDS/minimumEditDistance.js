function getValue(arr, i, j) { 
    if(i === -1 || j === -1){
        return Infinity; 
    }
    else {
        return arr[i][j];
    }
}

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
                    [getValue(memo, i-1, j-1), -1,-1],
                    [getValue(memo, i-1, j), -1,0],
                    [getValue(memo, i, j-1),0,-1]
                ]
                arr.sort((a,b) => a[0] - b[0]);
                memo[i][j] = memo[i+arr[0][1]][j+arr[0][2]] + 1; 
            }
        } 
    }

    // Backtracking Logic 
    let i = start.length - 1; 
    let j = end.length - 1; 
    res = []; 
    while(i > 0 || j > 0) {
        if(start[i] === end[j]) { 
            i = i - 1; 
            j = j - 1; 
        }
        else {
            let char = start[i]; 
            let char2 = end[j]
            let arr = [
                [getValue(memo, i-1, j-1), -1,-1, "REP"],
                [getValue(memo, i-1, j), -1,0, "DEL"],
                [getValue(memo, i, j-1),0,-1, "INS"]
            ]
            arr.sort((a,b) => a[0] - b[0]); 
            i = i + arr[0][1]; 
            j = j + arr[0][2];  
            let op = arr[0][3];

            if(op === 'INS') { 
                res.unshift(`${op} ${char2}`)
            }else {
                res.unshift(`${op} ${char}`)
            }
        }
    }
    return res; 
}