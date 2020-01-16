/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.values = new Array(k).fill(null); 
    this.head = 0; 
    this.tail = 0;
    this.length = k;
    this.curLength = 0;  
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(!this.values[this.tail % this.length]){
        this.values[this.tail % this.length] = value; 
        this.tail++;
        this.curLength++; 
        return true; 
    }
    return false; 

};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.curLength > 0) { 
        this.values[this.head % this.length] = null; 
        this.head++; 
        this.curLength--; 
        return true; 
    }    
    return false; 
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.values[this.head % this.length] !== null){ 
        return this.values[this.head % this.length];
    }
    return -1; 
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.values[(this.tail - 1) % this.length] != null) { 
        return this.values[(this.tail - 1) % this.length]; 
    }
    return -1; 
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.curLength === 0; 
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.curLength === this.length; 
};