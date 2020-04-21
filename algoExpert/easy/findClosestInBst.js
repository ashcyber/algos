
function findClosestValueInBst(tree, target) {
  // Write your code here.
	
	let curNode = tree;   
  let closestVal = Infinity; 
  let closestNode = null; 
	
  if(tree === null) return closestVal;
  // Find the best place to insert the node 


  while(curNode !== null) { 

      if(Math.abs(curNode.value - target) < closestVal ){
        closestNode = curNode; 
        closestVal = Math.abs(curNode.value - target); 
      }
			
			if(target === curNode.value) {
				  return curNode.value				
			}
      else if(target < curNode.value) { 
          curNode = curNode.left; 
      }
      else if(target > curNode.value) { 
          curNode = curNode.right; 
      }

  }
	
  return closestNode.value; 
}
// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
