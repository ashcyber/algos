class Node {
    constructor(val) { 
        this.val = val; 
        this.left = null; 
        this.right = null; 
    }
}

function rotateLeftLeft(node) {
    let newRoot = node.right; 
    node.right = newRoot.left;
    newRoot.left = node; 
    return newRoot; 
}


function rotateRightRight(node) { 
    let newRoot = node.left; 
    node.left = newRoot.right; 
    newRoot.right = node; 
    return newRoot; 
}
/*
    O
     \ 
      O
     / 
    O
*/

function rotateRightLeft(node) { 
    node.right = rotateRightRight(node.right); 
    return rotateLeftLeft(node); 
}

/*
    O
   /
  O 
   \ 
    O 
*/
function rotateLeftRight(node){
    node.left = rotateLeftLeft(node.left); 
    return rotateRightRight(node); 
}

function getHeight(node){
    if(node === null){
        return 0; 
    }

    if(node.left === null && node.right === null) { 
        return 1; 
    }
    return 1 + Math.max(getHeight(node.left), getHeight(node.right)); 
}
function getBalance( rootLeft, rootRight){
    return getHeight(rootLeft) - getHeight(rootRight);
}

class BST {
    constructor(){ 
        this.root = null; 
    } 

    AVLInsert(data) { 
        let insert = function(node,value) { 
            if(node === null) { 
                return new Node(value);  
            }
            if(node.val <= value) {
                node.right = insert(node.right, value); 
            }
            else {
                node.left = insert(node.left, value); 
            }
            let balance = getBalance(node.left, node.right); 
             
            // left left case 
            if(balance > 1 && value <= node.left.val) { 
                return rotateRightRight(node); 
            }

            if(balance < -1 && value > node.right.val) { 
                return rotateLeftLeft(node); 
            }

            if(balance > 1 && value > node.left.val) { 
                return rotateLeftRight(node)
            }

            if(balance < -1 && value <= node.right.val) { 
                return rotateRightRight(node); 
            }

            return node; 
        }
        this.root = insert(this.root, data); 
    }
}

let t = new BST(); 
t.AVLInsert(10); 
t.AVLInsert(20); 
t.AVLInsert(30); 
t.AVLInsert(40); 
t.AVLInsert(50); 
t.AVLInsert(70)
console.log(t.root); 
