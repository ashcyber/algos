/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
  if(root === null) return 0; 
  if(root.left === null && root.right === null) return root.val; 

  let binNums = []; 

  function dfs(node, arr=[]){
      if(node === null) return; 
      if(node.left === null && node.right === null) { 
        binNums.push(arr.concat(node.val).join('')); 
        return; 
      }
      let combine = [...arr];
      combine.push(node.val);  
      dfs(node.left, combine); 
      dfs(node.right, combine); 
  }
  dfs(root); 
  let sum = 0; 
  for(let i = 0; i < binNums.length; i++) { 
    sum += parseInt(binNums[i],2); 
  }
  return sum; 
};