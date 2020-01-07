function getDigit(num, place) { 
    let num_str = `${num}`; 
    if(num === 0){
        return 1
    }
    else if(place < num_str.length){
        return parseInt(num_str.split('')[num_str.length - (place + 1)])
    }
    return 0; 
}



function maxDigits(arr) { 
    let maxDigit = 1; 
    arr.forEach(val => {
        if(maxDigit < `${val}`.length) { 
            maxDigit = `${val}`.length; 
        }
    })
    return maxDigit; 
}

function radixSort(arr) { 
    let maxDigitCount = maxDigits(arr);
    for(let k = 0; k < maxDigitCount; k++) { 
        let digitBuckets = Array.from({length: 10}, () => []); 
        for(let i = 0; i < arr.length; i++){ 
            digitBuckets[getDigit(arr[i], k)].push(arr[i]); 
        }
        arr = [].concat(...digitBuckets); 
    }

    return arr; 
}


let arr = [23,345, 5467, 12, 2345, 9852]; 
let ans = radixSort(arr); 
console.log(ans); 