let permutationsWithoutRepeat = function(permuteStr) {
    let permutations = []; 

    if(permuteStr.length < 2) { 
        permutations.push(permuteStr)
        return permutations; 
    }

    for(let i = 0; i < permuteStr.length; i++) { 
        let cur_char = permuteStr[i]; 
        let rest = permuteStr.slice(0,i).concat(permuteStr.slice(i+1, permuteStr.length))
        let recurPermute = permutationsWithoutRepeat(rest)
        
        for(let j = 0; j < recurPermute.length; j++) { 
            permutations.push(cur_char.concat(recurPermute[j]))
        }
    }
    return permutations; 
} 



let ans = permutationsWithoutRepeat("ABCD")
console.log(ans); 