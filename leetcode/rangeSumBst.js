/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    if(root === null) return 0; 
    
    sum = 0; 

    (function dfs(node) {
        if(node !== null){ 
            dfs(node.left); 
            if(node.val >= L && node.val <= R) sum+=node.val; 
            dfs(node.right);
        }
    })(root)

    return sum; 
};
