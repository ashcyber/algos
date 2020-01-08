/**
 * LinkedList Implementation 
 * - print
 * - push
 * - pop
 * - shift
 * - unshift
 * - get
 * - insert
 * - set
 * - reverse
 * 
 */

class Node {
    constructor(val){ 
        this.value = val; 
        this.next = null; 
    }
}

class LinkedList { 
    constructor() {
        this.head = null;
        this.tail = null;  
        this.length = 0; 
    }

    print() { 
        let curNode = this.head; 
        let arr = []; 
        while(curNode) { 
            arr.push(curNode.value); 
            curNode = curNode.next; 
        }

        console.log(arr); 
    }

    push(val) { 
        let newNode = new Node(val); 

        if(this.head === null){
            this.head = newNode;
            this.tail = this.head;  
        }else{
            this.tail.next = newNode; 
            this.tail = newNode; 
        }
        this.length++; 
    }

    pop() { 
        
        if(this.head == null){
            return null; 
        }else{
        
            let curNode = this.head; 

            while(curNode.next !== this.tail){
                curNode = curNode.next; 
            }
    
            let temp = this.tail; 
            curNode.next = null; 
            this.tail = curNode;
            
            this.length--; 
            
            return temp; 
        }
    }

    shift() { 
        if(this.head === null){
            return null 
        }else {
            let curNode = this.head; 
            this.head = curNode.next; 
            
            curNode.next = null; 
            
            this.length--; 

            return curNode; 
        }
    }

    unshift(val) { 
        let newNode = new Node(val); 

        if(this.head === null) { 
            this.head = newNode;
            this.tail = this.head; 
        }else {
            newNode.next = this.head; 
            this.head = newNode;     
        }

        this.length++; 

    }

    get(index) { 
        let curNode = this.head; 
        let idx = 0; 

        if(this.head === null) return null;  
        if(index < 0 || index > this.length) return null; 

        while(curNode) { 
            if(idx === index) break; 
            curNode = curNode.next; 
            idx++; 
        }

        return curNode; 
    }

    insert(value, index) {  
        let newNode = new Node(value); 
        
        if(index < 0 || index > this.length) return null; 
        
        if(index === 0) { 
            this.unshift(value); 
            return true; 
        }
        
        if(index === this.length) {
            this.push(value); 
            return true; 
        }

        let prevNode = this.get(index - 1);
        newNode.next = prevNode.next; 
        prevNode.next = newNode; 
        this.length++; 
        return true; 
        
    }

    set(value, index) { 
        if(index < 0 || index > this.length) return null;  
        if(this.head === null) {
            this.insert(value, 0);
            return false; 
        } 

        if(index === this.length){
            this.insert(value, index); 
        }

        let node = this.get(index); 
        node.value = value; 
        return true; 
    }

    reverse() { 
        if(this.length >= 2) {
            let temp = this.head; 
            this.head = this.tail;
            this.tail = temp;
            
            let cur = this.tail; 
            let prev = null; 

            while(cur != null) {     
                let node = cur.next;
                cur.next = prev; 
                
                prev = cur
                cur = node;     
            }

        }
    
    }
}

