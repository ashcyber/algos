function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var print = function(node) { 
    let curNode = node;
    let arr = [];  
    while(curNode !== null) { 
        arr.push(curNode.val); 
        curNode = curNode.next; 

    }
    console.log(...arr); 
}

var reverse = function(node) { 
    let prevNode = null;
    
    while(node != null){ 
        let n = node.next; 
        node.next  = prevNode; 
        prevNode = node; 
        node = n; 
    } 
    return prevNode; 
}

var isPalindrome = function(head) {
    if(head === null) { 
        return true; 
    }

    
    let slow = head; 
    let fast = head; 
    
    while(fast !== null && fast.next !== null) { 
        fast = fast.next.next; 
        slow = slow.next; 
    }

    slow = reverse(slow)
    fast = head; 

    while(slow !== null) { 
        if(slow.val != fast.val) { 
            return false; 
        }
        slow = slow.next; 
        fast = fast.next; 
    }

    return true;     
};