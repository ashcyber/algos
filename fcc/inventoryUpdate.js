function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    let new_arr = [...arr1,...arr2]; 
    let dict = {}; 
    for(let item of new_arr){
      if(dict[item[1]]){
        dict[item[1]]+=item[0]; 
      }else{
        dict[item[1]] = item[0]; 
      }
    }
    
    let res = Object.keys(dict)
                .sort()
                .map((key) => [dict[key], key]);     

    return res; 
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
