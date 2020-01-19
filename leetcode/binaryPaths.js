/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(root === null || root === undefined || root.val === undefined || root.val === null) return []; 

    let gArr = []; 

    (function dfs(node, arr = []) {
        
        if(node !== null) { 

            let nArr = [...arr]; 
            nArr.push(node.val);
            
            if(node.left === null && node.right === null) {
                gArr.push(`${nArr.join('->')}`); 
            }
            
            dfs(node.left, nArr);
            dfs(node.right, nArr);     
        }
    })(root); 

    return gArr; 
};

