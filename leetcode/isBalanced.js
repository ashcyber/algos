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
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(node) {
    function bst(node) {
        if(node === null || node === undefined) return 0; 
        else{
            let left = bst(node.left); 
            let right = bst(node.right); 

            if(left === -1 || right === -1 || Math.abs(left - right) > 1){ 
                return -1; 
            }
            return  Math.max(left,right) + 1 ;
        }
    }
    return bst(node) !== -1;  
};