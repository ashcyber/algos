// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


function validateBst(tree) {
  return (function dfs(node, min, max) {
 
      if(node === null) return true; 

      let left = dfs(node.left, min, Math.min(max, node.value - 1)); 
      let right = dfs(node.right,Math.max(min, node.value), max);
      

      let validState = node.value >= min && node.value <= max
      
      return left && right && validState 

    })(tree, -Infinity, Infinity)  
}


// Do not edit the line below.
exports.BST = BST;
exports.validateBst = validateBst;
