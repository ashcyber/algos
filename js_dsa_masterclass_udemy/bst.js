class Node  {
    constructor(value) { 
        this.value = value; 
        this.left  = null; 
        this.right = null;  
    }
}


class BinarySearchTree { 
    constructor() { 
        this.root = null; 
    }

    insert(val) {
        let newNode = new Node(val);  
        if(this.root === null) {    
            this.root = newNode; 
        }
        else {
            let curNode = this.root; 

            while(true){

                if(val < curNode.value) {
                    if(curNode.left === null){
                        curNode.left = newNode;
                        break;   
                    }else{
                        curNode = curNode.left;
                    }
                    
                    
                }else{
                    if(curNode.right === null){
                        curNode.right = newNode; 
                        break; 
                    }else{
                        curNode = curNode.right; 
                    }
                }
            }

            return true; 

        }
    }

    find(val) { 
        let isFound = false; 

        let searchTree = (node) => {
            if(node !== null) { 

                if(node.value === val){
                    return isFound = true; 
                }
    
                if(val < node.value ) {
                    searchTree(node.left)
                }
                else { 
                    searchTree(node.right); 
                }                
            }            
        }

        searchTree(this.root); 
        return isFound; 
    }

    bfs() { 
        let q = [];
        let visited = []; 
        if(this.root === null) { 
            return null; 
        }else{
            q.push(this.root); 
        }


        while(q.length !== 0) { 
            let node = q.shift(); 

            visited.push(node.value); 

            if(node.left !== null)  
                q.push(node.left)

            if(node.right !== null)
                q.push(node.right); 
        }
        console.log(visited); 
    }

}
