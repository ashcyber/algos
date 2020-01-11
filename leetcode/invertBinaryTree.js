function TreeNode(val) { 
    this.val = val; 
    this.left = this.right = null; 
}


/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    let q = []; 
    if(root === null)
        return null; 

    q.push(root); 
    
    while(q.length !== 0) { 
        let node = q.shift(); 

        let tempNode = node.left;
        node.left = node.right; 
        node.right = tempNode;

        if(node.left !== null)
            q.push(node.left)

        if(node.right !== null) 
            q.push(node.right)
    }

    return root; 
};


let t = new TreeNode(4); 
t.left = new TreeNode(2); 
t.right = new TreeNode(7); 
t.left.left = new TreeNode(1); 
t.left.right = new TreeNode(3); 
t.right.left = new TreeNode(6); 
t.right.right = new TreeNode(9) ;

let ans = invertTree(t); 
console.log(ans); 