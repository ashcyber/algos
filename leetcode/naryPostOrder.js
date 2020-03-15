var postorder = function(root) {
    let res = [];
    if(root === null) return res; 

    let dfs = function(node) { 
        if(node !== null) { 
            for(let i = 0; i < node.children.length; i++) {
                dfs(node.children[i]); 
            }
            res.push(node.val); 
        }
    }
    dfs(root); 
    return res; 
};  