/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isUnivalTree = function(root) {
    if(root === null) return nulll; 
    let value = root.val; 
    
    return (function dfs(node) { 
        if(node === null) return true; 
        if(node.val !== value) return false;
        return dfs(node.left) && dfs(node.right); 
    })(root); 
};