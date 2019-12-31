var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.levelOrder = function () { 

    if(this.root === null)
      return null; 

    let qList = [];
    let visited = []; 
    qList.push(this.root); 

    while(qList.length !== 0){
      let curNode = qList.shift(); 
      visited.push(curNode.value); 

      // left node 
      if(curNode.left !== null)
        qList.push(curNode.left); 

      // right node 
      if(curNode.right !== null){
        qList.push(curNode.right); 
      }
    }
    return visited; 
  }

  this.reverseLevelOrder = function () {
    if(this.root === null)
      return null; 

    let qList = []; 
    let visited = []; 
    qList.push(this.root); 

    while(qList.length !== 0){
      let curNode = qList.shift(); 
      visited.push(curNode.value); 

      if(curNode.right !== null)
        qList.push(curNode.right); 

      if(curNode.left !== null)
        qList.push(curNode.left); 

    }
    
    return visited; 

  }
}
