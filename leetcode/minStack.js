var MinStack = function() {
    this.values = []; 
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) { 
    this.values.push(x); 
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.values.pop(); 
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.values[this.values.length - 1]; 
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...this.values); 
};


