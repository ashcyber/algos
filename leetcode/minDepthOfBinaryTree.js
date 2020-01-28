function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function minDepth(root) {

    if(root === null || root === undefined) return 0; 
    if(root.right === null && root.left === null) return 1; 

    let gMin = (function minDepthRecur(node) { 
        if(node === null) return  Infinity; 
        if(node.left === null && node.right === null) return 1; 
        let left = minDepthRecur(node.left); 
        let right = minDepthRecur(node.right);
        return 1 + Math.min(left, right); 
    })(root)  
    return gMin; 
}

let t = new TreeNode();  


console.log(minDepth(t)); 