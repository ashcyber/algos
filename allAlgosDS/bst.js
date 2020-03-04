class Node {
    constructor(val) { 
        this.val = val; 
        this.left = null; 
        this.right = null; 
    }
}

class BST { 
    constructor() { 
        this.root = null; 
    }

    insert(value) { 
       if(this.root === null) { 
           this.root = new Node(value)
       }
       else { 
           let cur = this.root; 
           while(cur.left !== null && cur.right !== null) { 
               if(value < cur.val) { 
                   cur = cur.left; 
               }
               else {
                   cur = cur.right; 
               }
           }

           if(value < cur.val) {
               cur.left = new Node(value); 
           }else {
               cur.right = new Node(value); 
           }
       }
    }

    recursiveInsert(data){
        let insertNode = function(node,value){
            if(node === null) return new Node(value); 
            
            else if(value <= node.val) { 
                node.left = insertNode(node.left, value); 
            }
            else {
                node.right = insertNode(node.right, value); 
            }

            return node; 
        }

        this.root = insertNode(this.root, data); 
    }


    findMinNode(node) { 
        let cur = node; 
        while(cur.left !== null) { 
            cur = cur.left; 
        }
        return cur; 
    }

    delete(value) {
        let deleteNode =  function(node, value) { 
            if(node === null){
                return null;
            }  
            else if(value < node.val) { 
                node.left = deleteNode(node.left, value) 
                return node; 
            }
            else if(value > node.val) { 
                node.right = deleteNode(node.right, value); 
                return node; 
            }
            else {
                // case 1 => leaf node
                if(node.left === null && node.right === null) { 
                    return null; 
                }
                // case 2 => node with one child
                else if(node.right === null && node.left !== null) { 
                    return node.left; 
                }
                else if(node.left === null && node.right !== null) {
                    return node.right; 
                }
                // case 3 => node with two children 
                else {
                    let minNode = findMinNode(node.right); 
                    node.val = minNode.val; 
                    node.right = deleteNode(node.right, minNode.val); 
                    return node; 
                }
            }        
        }
        this.root = deleteNode(this.root, value); 
    }


    traverseInorder() { 
        let arr = []; 
        (function dfs(node) { 
            if(node !== null) { 
                dfs(node.left); 
                arr.push(node.val); 
                dfs(node.right);             
            }
        })(this.root); 

        return arr; 
    }

    traversePostOrder() {
        let arr = []; 
        (function dfs(node) { 
            if(node !== null) { 
                dfs(node.left); 
                dfs(node.right);       
                arr.push(node.val);       
            }
        })(this.root); 

        return arr; 
    }

    traversePreOrder() { 
        let arr = []; 
        (function dfs(node) { 
            if(node !== null) { 
                arr.push(node.val);       
                dfs(node.left); 
                dfs(node.right);       
            }
        })(this.root); 

        return arr; 
    }
} 


let t = new BST(); 
t.insert(10); 
t.insert(20); 
t.insert(1); 
t.delete(1); 
console.log(t.traverseInorder()); 