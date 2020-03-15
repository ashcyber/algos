var maxDepth = function(root) {
    if(root === null) return 0;
    let globalMax = -Infinity;  
    
    function dfs(node) { 
        let localMax = -Infinity; 
        if(node.children.length === 0){
            globalMax = 1; 
            return 1  
        } 
        for(let c = 0; c < node.children.length; c++) { 
            localMax = Math.max(localMax, dfs(node.children[c])); 
        }
        globalMax = Math.max(globalMax, 1 + localMax); 
        return 1 + localMax; 
    }
    dfs(root); 
    
    return globalMax; 
};