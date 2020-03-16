class Node {
    constructor(val, min) { 
        this.val = val; 
        this.min = min;
        this.next = null;  

    }
}


var MinStack = function() {
    this.head = null; 
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) { 
    if(this.head === null) { 
        this.head = new Node(x,x); 
    }
    else {
        let newNode = new Node(x, Math.min(x, this.head.min)); 
        newNode.next = this.head; 
        this.head = newNode; 
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.head === null) return null; 
    let headVal = this.head.val; 
    this.head = this.head.next; 
    return headVal;  
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.head.val; 
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.head.min; 
};