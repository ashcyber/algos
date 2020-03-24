var numEquivDominoPairs = function(dominoes) {    
    let map = {}; 

    function pushToMap(val1,val2) { 
      if(!map.hasOwnProperty(val1)) { 
        map[val1] = {};
      }
      if(!map[val1].hasOwnProperty(val2)) {
        map[val1][val2] = 0; 
      }

      map[val1][val2]++; 
    }

    function getVal(val1,val2) { 
      if(map.hasOwnProperty(val1) && map[val1].hasOwnProperty(val2)) return map[val1][val2]; 
      if(map.hasOwnProperty(val2) && map[val2].hasOwnProperty(val1)) return map[val2][val1]; 
      return 0; 
    }

    let sum_pairs = 0; 
    for(let i = 0; i < dominoes.length; i++) { 
      let [val1, val2] = dominoes[i];  
      sum_pairs += getVal(val1,val2); 
      if(val1 < val2) { 
        pushToMap(val1,val2); 
      }
      else {
        pushToMap(val2,val1); 
      } 
    }
  return sum_pairs; 
};