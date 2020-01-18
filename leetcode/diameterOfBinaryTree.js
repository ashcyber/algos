function diameterOfBinaryTree(node) { 
    let max = 0; 
    (function recur(node) {
        if(node === null){
            return 0; 
        }

        let left = recur(node.left); 
        let right = recur(node.right);
        max = Math.max(max, left + right); 
        return 1 + Math.max(left, right);   
    })(node)
    return max; 
}