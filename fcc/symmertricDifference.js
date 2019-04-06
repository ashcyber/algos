function sym(...args) {
  let dict_hash = {}
  for(let arr of args){
    let set_arr = new Set(arr)
    for(let elem of set_arr){
      if(dict_hash[elem])
        dict_hash[elem] += 1;
      else
        dict_hash[elem] = 1;      
    } 
  }

  let arr = Object.keys(dict_hash)
              .filter((key) => dict_hash[key] % 2 == 1 )
              .sort((a,b)=> a-b)
              .map((a) => parseInt(a)); 

  return arr; 
}
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6],
[1, 2, 3], [5, 3, 9, 8], [1]));