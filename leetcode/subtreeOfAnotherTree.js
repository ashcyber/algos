/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isIdentical = function(s, t) { 
    
    if(s === null && t === null) { 
        return true; 
    }
    
    if((s === null && t !== null) || (s !== null && t === null)) {
        return false; 
    }

    if((s.val !== t.val)){
        return false; 
    }
    
    return isIdentical(s.left, t.left) && isIdentical(s.right, t.right); 
}

var isSubtree = function(s, t) {
    if(s === null && t === null) { 
        return true; 
    }

    if(s !== null && t === null) {
        return true; 
    }

    if(s === null && t !== null) { 
        return false; 
    }


    return isIdentical(s,t) || isSubtree(s.left,t) || isSubtree(s.right, t);  

};
