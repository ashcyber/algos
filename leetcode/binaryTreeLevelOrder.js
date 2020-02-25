/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let arr = []; 
    
    if(root === null) return arr; 
    
    (function dfs(node, level) { 
        if(node !== null) { 
            if(arr[level] === undefined) arr[level] = []; 
            arr[level].push(node.val); 
            dfs(node.left, level+1); 
            dfs(node.right, level+1); 
        }
    })(root, 0); 
    
    return arr; 
};