var hasPathSum = function(root, sum) {
    if(root === null){
        return false; 
    }
    let isSumExists = false; 
    function dfs(node,sum) {
        if(node !== null) { 
            if((node.left === null && node.right === null) && node.val === sum) { 
                isSumExists = true; 
                return true; 
            }


            dfs(node.left, sum - node.val); 
            dfs(node.right, sum - node.val)    
        } 
    }    
    
    dfs(root,sum); 
    return isSumExists; 
};