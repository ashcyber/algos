function longestCommonSubsequence(str1, str2){
    str1 = " " + str1
    str2 = " " + str2
    
    let arr = new Array(str1.length);

    for(let i = 0; i < str1.length; i++) { 
        arr[i] = new Array(str2.length);     
    }

    for(let i = 0; i < str1.length; i++){
        arr[i][0] = 0
    }
    for(let j = 0; j  < str2.length; j++) { 
        arr[0][j] = 0; 
    }

    for(let i = 1; i < str1.length; i++) { 
        for(let j = 1; j < str2.length; j++) {
            if(str1[i] === str2[j]){
                arr[i][j] = arr[i-1][j-1]+1; 
            }
            else{
                arr[i][j] = Math.max(arr[i-1][j], arr[i][j-1])
            }
        }
    }

    let i = str1.length - 1; 
    let j = str2.length - 1; 
    let res = []; 
    while(i > 0 && j > 0) { 
        if(arr[i][j-1] === arr[i][j]){
            j = j - 1; 
        }
        else if(arr[i-1][j] === arr[i][j]){
            i = i - 1; 
        }
        else{
            res.unshift(str1[i])
            i = i - 1;
            j = j - 1;
        }
    }
    return res.join(''); 
}

let ans = longestCommonSubsequence("AVVB", "AAB"); 
console.log(ans)