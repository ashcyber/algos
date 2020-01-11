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
    let stack = []; 

    while(fast !== null && fast.next !== null) { 
        stack.push(slow.val); 
        fast = fast.next.next; 
        slow = slow.next; 
    }
    
    if(fast) { 
        stack.push(slow.val); 
    }
    
    while(slow !== null) { 
        let elem = stack.pop(); 
        if(elem !== slow.val) { 
            return false; 
        }
        slow = slow.next; 
    }

    return true; 
};




l1 = new ListNode(2); 
l1.next = new ListNode(2);
l1.next.next = new ListNode(2); 
l1.next.next.next = new ListNode(0); 
l1.next.next.next.next = new ListNode(5);
l1.next.next.next.next.next = new ListNode(7); 
 
let ans = isPalindrome(l1); 
console.log(ans); 
