class Node { 
    constructor(value){ 
        this.value = value; 
        this.next = null; 
        this.prev = null; 
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null; 
        this.tail = null;
        this.length = 0;  
    } 
    
    print(){
        let curNode = this.head; 
        let arr = []; 
        while(curNode) { 
            arr.push(curNode.value); 
            curNode = curNode.next; 
        }

        console.log(arr); 

    }
    printbackward() { 
        let curNode = this.tail; 
        let arr = []; 
        while(curNode) {
            arr.push(curNode.value); 
            curNode = curNode.prev; 
        }

        console.log(arr); 
    }

    push(val){ 
        let newNode = new Node(val); 
        if(this.tail === null) {
            this.head = newNode; 
            this.tail = this.head;
        }else{
            this.tail.next = newNode; 
            newNode.prev = this.tail; 
            this.tail = newNode; 
        }

        this.length++; 
        return true; 
    }

    pop() { 
        if(this.tail === null) return null; 
        if(this.tail === this.head) {
            this.head = null; 
            this.tail = null;
        }else{
            let node = this.tail.prev; 
            node.next = null; 
            this.tail = node; 
        }

        this.length--; 
        return true; 
    }


    shift() { 
        if(this.tail === null) return null; 
        if(this.tail === this.head) {
            this.pop();   
        }else{
            let node = this.head.next; 
            node.prev = null; 
            this.head = node;
        }

        this.length--; 
        return true; 
    }

    unshift(val) { 
        if(this.tail === null) {
            this.push(val); 
        }else{   
            let newNode = new Node(val); 
            newNode.next = this.head; 
            this.head.prev = newNode;
            this.head = newNode;   
        }  

        this.length++; 
        return true; 
    }


    get(index) { 
        if(this.tail == null) return null; 
        if(index < 0 || index > this.length) return null; 
        let curNode = this.head; 
        let idx = 0; 

        while(curNode){ 
            if(index === idx) break; 
            curNode = curNode.next; 
            idx++; 
        }

        return curNode; 
    }


    insert(value, index) { 
        if(index < 0 || index  > this.length ) return null; 
        if((this.tail === null && index === 0) || (index === this.length)){
            this.push(value);
             
        }  
        else if(index === 0){ 
            this.unshift(value);  
        }
        else{
            let newNode = new Node(value); 
            let prevNode = this.get(index - 1); 
            newNode.next = prevNode.next; 
            newNode.prev = prevNode; 
            prevNode.next = newNode; 
            newNode.next.prev = newNode; 
            this.length++; 
        }

        return true;
    }

    set(value, index) { 
        if(index < 0 || index >= this.length) return null;
        if(this.tail === null) {
            this.push(value); 
        }
        else { 
            let node = this.get(index); 
            node.value = value; 
        }

        return true; 
    }

    remove(index) { 
        if(this.tail === null) return null; 
        if(index < 0 || index >= this.length) return null; 
        if((this.tail === this.head) && index === 0) { 
            this.tail = null; 
            this.head = null; 
        }
        else if(index === this.length - 1){ 
            this.pop(); 
        }
        else {
            let prevNode = this.get(index - 1); 
            prevNode.next = prevNode.next.next; 
            prevNode.next.prev = prevNode; 
            this.length--; 
        }

        return true; 
    }

    reverse() { 
        if(this.length === 2){ 
            let temp = this.head; 
            this.head = this.tail; 
            this.tail = temp;

            this.head.next = this.tail; 
            this.tail.prev = this.head;        
        }
        else if(this.length > 2) { 
            let temp = this.head; 
            this.head = this.tail; 
            this.tail = temp;  
            let curNode = this.tail; 
            let prevNode = null; 

            while(curNode !== null) { 
                let node = curNode.next; 
                if(curNode.prev){
                    curNode.next = prevNode; 
                    prevNode.prev = curNode;  
                } 

                prevNode = curNode; 
                curNode = node; 
            }

        }

        this.head.prev = null; 
        this.tail.next = null;         

    }

}

