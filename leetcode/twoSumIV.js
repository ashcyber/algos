/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    if(root === null) return false;
    
    let hashMap = {}; 
    let pair = (function helper(node, k) { 
        if(node !== null) { 
            if(hashMap[node.val] === 1) return true; 
            if(hashMap[k - node.val] === undefined) hashMap[k - node.val] = 1; 
            return helper(node.left, k) || helper(node.right, k); 
        }
    })(root, k)
    return pair === true;  
};
