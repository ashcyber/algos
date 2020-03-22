/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  let map = {}
  let common = {}
  let minIndexVal = list1.length + list2.length; 
  for(let i = 0; i < list2.length; i++){
    map[list2[i]] = i;  
  }

  for(let i = 0; i < list1.length; i++){
    if(map.hasOwnProperty(list1[i])) { 
      let indexVal = i + map[list1[i]]; 
      if(!common.hasOwnProperty(indexVal)) common[indexVal] = []; 
      common[indexVal].push(list1[i]); 
      minIndexVal = Math.min(minIndexVal, indexVal);     
    }
  }
  return common[minIndexVal]; 
};