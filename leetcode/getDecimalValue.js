var getDecimalValue = function(head) {
    let curNode = head;
    let str = "";  
    while(curNode !== null) {
        str += curNode.val; 
        curNode = curNode.next; 
    }

    return parseInt(str, 2); 
};