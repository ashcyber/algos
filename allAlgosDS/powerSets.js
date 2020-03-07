let generatePowerSets = function(orignalSet,allSets=[[]],currentSet=[], startAt = 0){
    for(let i = startAt; i < orignalSet.length; i++){
        currentSet.push(orignalSet[i])

       allSets.push([...currentSet])

        generatePowerSets(orignalSet, allSets, currentSet, i+1); 

        currentSet.pop() 
    }

    return allSets
}

let ans = generatePowerSets(['A','B','C'])
console.log(ans)