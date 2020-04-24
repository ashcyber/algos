// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.
		array.push(this.name);
		
		(function dfs (nodes) {
			nodes.forEach((node) => {
				array.push(node.name)
				dfs(node.children)
			})
			
		})(this.children)
		
		return array
  }
}

// Do not edit the line below.
exports.Node = Node;
