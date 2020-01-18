
 
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */

var convertBST = function(root) {
    if(root === null) {
        return null; 
    }
    let sum = 0; 
    function rTraverse(node) {
        if(node !== null) { 
            rTraverse(node.right); 
            node.val += sum;
            sum = node.val;  
            rTraverse(node.left);
        } 
    }; 
    rTraverse(root);

    return root; 
};
