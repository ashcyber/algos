/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if(root === null || root === undefined) return []; 
    
    let sum = {}; 
    let count = {};
    
    (function dfs(node, level = 0) { 
        if(node !== null) {
            if(sum[level] === undefined) { 
                sum[level] = node.val; 
                count[level] = 1;  
            }else{
                sum[level] += node.val;
                count[level]++;  
            } 
            dfs(node.left, level + 1); 
            dfs(node.right, level + 1); 
        }
    })(root); 

    let len = Object.keys(sum).length;
    let a = new Array(len); 
    for(let i = 0; i < len; i++) { 
        a[i] = sum[i]/count[i]
    }

    return a; 
};