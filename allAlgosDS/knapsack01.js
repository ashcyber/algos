function knapsack(values, weights, totalWeight) { 
    // PREPARE MEMO TABLE 
    let memo = new Array(values.length); 
    for(let i = 0; i < values.length; i++) { 
        memo[i] = new Array(totalWeight+1);    
    }
    for(let i = 0; i < values.length; i++) { 
        memo[i][0] = 0; 
    }
    for(let w = 0; w <= totalWeight; w++) { 
        if(weights[0] <= w) { 
            memo[0][w] = values[0]; 
        }
    }
    
    // Building the table 
    for(let w = 1; w < weights.length; w++) { 
        for(let capacity = 1; capacity <= totalWeight; capacity++) { 
            let totalValue = 0; 
            if(weights[w] <= capacity) { 
                totalValue+= values[w] + memo[w-1][capacity - weights[w]]; 
            }
            memo[w][capacity] = Math.max(memo[w-1][capacity], totalValue); 
        }
    }
    // Backtracking Logic 
    let w = weights.length - 1; 
    let c = totalWeight; 
    let res = []
    while(w !== 0 && c !== 0){ 
        if(memo[w - 1][c] !== memo[w][c]) { 
            res.unshift({w: weights[w], v: values[w]});
            c = c - weights[w]; 
            w = w - 1;  
        }else{
            w = w - 1; 
        }
    }

    if(memo[w][c] !== 0) res.unshift({w: weights[w], v:values[w]}); 
    return res; 
  }


let weights = [1,3,4,5]; 
let values = [1,4,5,6];
let ans = knapsack(values, weights, 7);  
console.log(ans); 