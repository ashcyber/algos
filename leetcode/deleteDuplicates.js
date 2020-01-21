var deleteDuplicates = function(head) {
    if(head === null){ 
        return null; 
    }

    let slow = head; 
    let fast = head; 
    while(fast !== null) { 
        while(fast !== null && slow.val === fast.val ) { 
            fast = fast.next; 
        }
        slow.next = fast; 
        slow = fast; 
    }
    return head;  
};