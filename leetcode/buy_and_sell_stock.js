let maxProfit  = function (prices) { 
    let maxProf = -Infinity; 
    let minPrice =  Infinity; 

    for(let i = 0; i < prices.length; i++){ 
        minPrice = Math.min(minPrice, prices[i]); 
        maxProf = Math.max(maxProf, prices[i] - minPrice); 
    }
 
    if(maxProf === -Infinity) 
        return 0; 

    return maxProf
}

