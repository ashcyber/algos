var maxDepth = function(root) {
    
    if(!root || root.val === undefined)
        return 0;

    let minH = 0; 
    (function dfs(node, height = 0) {
        if(node !== null) { 
            minH = Math.max(height, minH); 
            dfs(node.left, height+1); 
            dfs(node.right, height+1); 
        }
    })(root)

    return minH + 1;  
};