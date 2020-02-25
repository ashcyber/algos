var addTwoNumbers = function(l1, l2) {
    let curh1 = l1; 
    let curh2 = l2; 
    let prev1 = null; 

    let carry = 0; 
    while(curh1 !== null && curh2 !== null) { 
      curh1.val += (curh2.val + carry);
      carry = Math.floor(curh1.val / 10);
      curh1.val = curh1.val % 10; 
      prev1 = curh1; 

      curh1 = curh1.next; 
      curh2 = curh2.next; 
    }
    
    if(curh2 !== null && curh1 == null) { 
      prev1.next = curh2; 
      curh1 = curh2; 
    }
    
    while(curh1 !== null) { 
      curh1.val += carry; 
      carry = Math.floor(curh1.val / 10); 
      curh1.val = curh1.val % 10; 

      prev1 = curh1; 
      curh1 = curh1.next; 
    }

    if(carry !== 0) { 
      prev1.next = new ListNode(carry); 
    }
    
    return l1; 
};
