/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    cost.push(0); 
    for(let i = 0; i < cost.length; i++) { 
        let c1 = i - 1; 
        let c2 = i - 2;
        
        if(c1 >= 0 && c2 >= 0) {
            cost[i] += Math.min(cost[c1], cost[c2]);
        }
    }
    return cost[cost.length - 1]; 
};