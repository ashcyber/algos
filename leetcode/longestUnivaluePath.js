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
var longestUnivaluePath = function(root) { 
    let max = 0; 
    (function dfs(node, rootNode) { 
        if(node === null) return 0; 

        let left = dfs(node.left, node)
        let right = dfs(node.right, node); 

        max = Math.max(max, left + right);  
        if(node.val === rootNode.val) { 
           return 1 + Math.max(left,right); 
        }
        else{
            return 0; 
        }

    })(root,root)
    return max; 
}
