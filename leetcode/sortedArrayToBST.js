/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    let newNums = []; 
    let rootNode = null; 
    function buildArray(arr) {
        if(arr.length > 0) {
            let mid = Math.floor(arr.length/2)
            let root = arr[mid];

            newNums.push(root); 
            buildArray(arr.slice(0, mid)); 
            buildArray(arr.slice(mid+1)); 
            
        }   
    }
    buildArray(nums); 

    function buildTree() { 
        if(nums.length === 0) {
            return null; 
        }

        if(rootNode === null) {
            rootNode = new TreeNode(newNums[0]); 
        }

        for(let i = 1; i < newNums.length; i++) { 
            let curNode = rootNode;
            let prevNode = null;  
            while(curNode !== null) {
                prevNode = curNode;  
                if(newNums[i] < curNode.val) { 
                    curNode = curNode.left; 
                }
                else if(newNums[i] >= curNode.val) {
                    curNode = curNode.right; 
                }
            }
            
            if(newNums[i] < prevNode.val) { 
                prevNode.left = new TreeNode(newNums[i]); 
            }else {
                prevNode.right = new TreeNode(newNums[i]); 
            }
        }
    }

    buildTree(); 

    return rootNode;
};