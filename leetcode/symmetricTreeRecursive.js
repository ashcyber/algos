function TreeNode(val) { 
    this.val = val; 
    this.left = this.right = null; 
}

var isSymmetric = function (root)  {
    if(root === null) { 
        return true; 
    }

    if(root.left === null || root.right === null) { 
        return root.left === root.right; 
    }

    return isSymmetricRecur(root.left, root.right); 
}

var isSymmetricRecur = function(leftSub, rightSub) { 
    if(!leftSub || !rightSub){ 
        return leftSub === rightSub; 
    }

    if(!leftSub.left|| !rightSub.right) { 
        return leftSub.left === rightSub.right; 
    }

    if(!leftSub.right || !rightSub.left) { 
        return leftSub.right === rightSub.left; 
    }

    if(leftSub.left.val !== rightSub.right.val) { 
        return false; 
    }

    if(leftSub.right.val !== rightSub.left.val) {
        return false; 
    }

    isSymmetricRecur(leftSub.left, rightSub.right); 
    isSymmetricRecur(leftSub.right, rightSub.left); 

    return true; 
}


let t = new TreeNode(1); 
t.left = new TreeNode(2); 
t.right = new TreeNode(2); 
t.left.left = new TreeNode(3); 
t.left.right = new TreeNode(5); 
t.right.right = new TreeNode(3); 
t.right.left = new TreeNode(5); 

let ans = isSymmetric(t)
console.log(ans); 

