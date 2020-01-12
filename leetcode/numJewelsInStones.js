/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let myStones = {}; 
    let total = 0; 
    for(let i = 0; i < S.length; i++) { 
        if(!myStones[S[i]]) myStones[S[i]] = 1; 
        else {
            myStones[S[i]]++; 
        }
    }

    for(let i = 0; i < J.length; i++){
        if(myStones[J[i]]) total+=myStones[J[i]]; 
    }

    return total; 
};