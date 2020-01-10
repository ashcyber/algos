/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let node = null; 
    let head = null; 
    while(l1 && l2) {
        
        if(l1.val < l2.val) { 
            if(node === null){
                node = new ListNode(l1.val);
                head = node; 
            }else{
                head.next = new ListNode(l1.val); 
                head = head.next; 

            }
            
            l1 = l1.next; 

        }
        else {
            if(node === null){
                node = new ListNode(l2.val); 
                head = node;
            }else{
                head.next = new ListNode(l2.val); 
                head = head.next; 
            }
            
            l2 = l2.next; 
        }
    }
    
    if(l1){ 
        if(node !== null) { 
            head.next = l1;
        }else {
            node = l1; 
        }
          
    }
    
    if(l2) { 
        if(node !== null) { 
            head.next = l2; 
        }else {
            node = l2; 
        }
    }

    
    return node        
};