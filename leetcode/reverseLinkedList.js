/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null)
        return null; 
    
    let prevNode = null; 
    let curNode = head; 
    while(curNode){
        let nextNode = curNode.next; 
        if(prevNode !== null){  
            curNode.next = prevNode
        }
        prevNode = curNode; 
        curNode = nextNode; 
    }
    head.next = null; 
    return prevNode
};