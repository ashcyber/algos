/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(arr, t) {
    let gArr = []; 
    arr = arr.sort((a,b) => a-b); 
    function allCombinations(givenArr,target,combineArr=[]) { 
        let sum = combineArr.reduce((a,b) => a+b,0);
        
        if(sum === target) {
            gArr.push(combineArr)
        }
        else if(sum <  target) {
            for(let i = 0; i < givenArr.length; i++) {
                let combination = [...combineArr]
                combination.push(givenArr[i]); 
                allCombinations(givenArr.slice(i), target, combination); 
            }
        }
    }
    allCombinations(arr,t); 

    return gArr; 
}


console.log(combinationSum([2,3,5],8))
