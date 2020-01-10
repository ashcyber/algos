var isSymmetric = function(root) {
    if(root === null) { 
        return true; 
    }
    
    let qLeft  = []; 
    let qRight = []; 
    
    qLeft.push(root.left); 
    qRight.push(root.right); 
    
    
    while(qLeft.length !== 0 && qRight.length !== 0) {

        let leftSub = qLeft.shift(); 
        let rightSub = qRight.shift();
        
        if((leftSub === null  && rightSub !== null) ||
           (leftSub !== null && rightSub === null)) {
            return false; 
        }
        
        if(leftSub !== null) { 
            if(leftSub.val !== rightSub.val) { 
                return false; 
            }
            
            qLeft.push(leftSub.left); 
            qLeft.push(leftSub.right); 
            
            qRight.push(rightSub.right); 
            qRight.push(rightSub.left); 
        }  
    }
    return true;
    
};