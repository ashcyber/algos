var sumOfLeftLeaves = function(root) {
    if(root === null) return 0; 

    let sum = 0; 
    (function dfsRecur(node, dir){
        if(node !== null) { 
            if(dir === -1 && node.left === null && node.right === null){
                sum += node.val; 
            }

            dfsRecur(node.left, -1); 
            dfsRecur(node.right, 1); 
        }
    })(root, 0)

    return sum; 
};
