/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var isDescendant = function(root, node) { 
    let curNode = root; 

    if(!curNode || !node) return false;   
    
    if(curNode.val === node.val) return true; 
    
    while(curNode !== null && curNode.val !== node.val) { 
        if(node.val < curNode.val) { 
            curNode = curNode.left; 
        }else {
            curNode = curNode.right; 
        }
    } 
    return curNode !== null; 
}

var lowestCommonAncestor = function(root, p, q) {
    let foundNode = null; 
    function lca(root,p,q) {
        if(root !== null) { 
        
            lca(root.left, p, q); 
            lca(root.right, p, q);         
            if(isDescendant(root, p) && isDescendant(root, q) && !foundNode){
                foundNode = root; 
            }
        }
    }
    lca(root,p,q); 
    return foundNode;

};