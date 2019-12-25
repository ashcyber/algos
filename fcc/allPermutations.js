function allPermutations(str) {
    let result_arr = []; 
  
    if(str.length < 2){
      result_arr.push(str); 
      return result_arr; 
    }
  
    for(let i = 0; i < str.length; i++){
      let cur_char = str[i]; 
      let rem_arr = str.slice(0,i).concat(str.slice(i+1, str.length)); 
      let perm_arr = allPermutations(rem_arr); 
  
      for(let j = 0; j < rem_arr.length; j++)
        result_arr.push(cur_char + perm_arr[j]); 
    }
    
    return result_arr; 
}