function combination(str, combiLength) { 
    if(combiLength  === 1) { 
        return str.split('');
    }

    let combArr = []; 

    for(let i = 0; i <= str.length - combiLength; i++) { 
        let first = str[i]; 
        let rest = str.slice(i+1);
        let arr = combination(rest, combiLength - 1); 
        for(let j = 0; j < arr.length; j++) { 
            combArr.push([first].concat([...arr[j]]))
        }
    }
    return combArr; 

}

let ans = combination("ABC", 2)
console.log(ans)