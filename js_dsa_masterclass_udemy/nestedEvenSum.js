function nestedEvenSum(obj1) { 
    let sum = 0; 
    for (let prop in obj1) {
        if(typeof obj1[prop]  === "number"){  
            
            if(obj1[prop] % 2 === 0)
                sum += obj1[prop]; 

        }else if(typeof obj1[prop] === "object"){
            sum =  sum + nestedEvenSum(obj1[prop])
        }
    }

    return sum; 
}





var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj2)); // 10
