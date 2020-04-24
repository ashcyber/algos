// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
	let arr = []; 
	(function dfs(node, sum = 0) {
		if(node !== null) {
			if(node.left === null && node.right === null) {
				arr.push(sum + node.value); 
				return; 
			}
			dfs(node.left, sum + node.value)
			dfs(node.right, sum + node.value)
			
		}
	})(root)

	return arr;
}
// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
