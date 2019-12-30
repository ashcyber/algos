var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;

  this.inorder = function () { 
    if(this.root === null)
      return null;
    else  { 
      let inorder_arr = []; 

      let inordRecur = (node) => {
        if(node !== null){
          inordRecur(node.left); 
          inorder_arr.push(node.value);
          inordRecur(node.right);  
        }
      }

      inordRecur(this.root); 
      return inorder_arr; 

    }
  }

this.preorder = function () { 
    if(this.root === null)
      return null;
    else  { 
      let preorder_arr = []; 

      let preorderRecur = (node) => {
        if(node !== null){
          preorder_arr.push(node.value);
          preorderRecur(node.left); 
          preorderRecur(node.right);  
        }
      }

      preorderRecur(this.root); 
      return preorder_arr; 

    }
  }

  this.postorder = function () { 
    if(this.root === null)
      return null;
    else  { 
      let postorder_arr = []; 

      let postorderRecur = (node) => {
        if(node !== null){
          postorderRecur(node.left); 
          postorderRecur(node.right);
          postorder_arr.push(node.value);

        }
      }

      postorderRecur(this.root); 
      return postorder_arr; 

    }
  }
}
