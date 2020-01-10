/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let pA = headA;
    let pB = headB; 
    let aLen = 0; 
    let bLen = 0; 
    
    while(pA !== null){
        pA = pA.next; 
        aLen++; 
    }
    
    while(pB !== null) { 
        pB = pB.next; 
        bLen++; 
    }
    
    pA = headA; 
    pB = headB; 

    while(pA !== null && pB !== null) { 
        if(aLen > bLen) { 
            aLen--; 
            pA = pA.next; 
        }
        else if(aLen < bLen) { 
            bLen--; 
            pB = pB.next; 
        }
        else {
            if(pA === pB && pA !== null) return pA; 
            
            pA = pA.next; 
            pB = pB.next; 
        }
    }
    
    return null; 
};