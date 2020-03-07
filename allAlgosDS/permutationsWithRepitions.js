// Time complexity: O(n*n!)
let repeatPermuations = function(permuteString, index = permuteString.length){
    // BASE CASE 
    if(index === 1)
        return permuteString.split('').map((val) => [val])

    let permutations = []; 

    // RECURSIVE STEP 
    let smallerPermutation = repeatPermuations(permuteString, index-1)
    // BACKTRACKING LOGIC 

    smallerPermutation.forEach(val => {
        for(let i = 0; i < permuteString.length; i++) { 
            permutations.push(val.concat([permuteString[i]]))
        }
    });

    return permutations; 
}

let ans = repeatPermuations("ABC")
console.log(ans); 