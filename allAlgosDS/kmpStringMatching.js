function generateKmpArray(str) { 
    let values = new Array(str.length); 
    let i = 0; 
    let j = 1; 
    values[i] = 0; 
    
    while(j < str.length){
        if(str[i] !== str[j]){
            if(i !== 0) {
                i = values[i-1]; 
            }else{
                values[j] = values[i]; 
                j++
            }
        }else {
            values[j] = values[j-1] + 1;
            i++; 
            j++
        }
    }
    return values; 
}

function substringMatch(givenStr, subStr){
    let kmpArr = generateKmpArray(subStr);
    let aPointer = 0; 
    let subPointer = 0; 
    let noOfSubs = 0; 
    while(aPointer < givenStr.length) { 
        if(givenStr[aPointer] === subStr[subPointer]) {
            aPointer++; 
            subPointer++; 
        }
        else if(givenStr[aPointer] !== subStr[subPointer]){
            if(subPointer === 0){
                aPointer++; 
            }
            else {
                subPointer = kmpArr[subPointer - 1]; 
            }
        }

        if(subPointer === subStr.length) {
            subPointer = kmpArr[subPointer - 1]; 
            noOfSubs++; 
        }
    }
    return noOfSubs;
}
