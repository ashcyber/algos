class Node {
    constructor(val){
        this.next = null; 
        this.prev = null; 
        this.val = val; 
    }
}

class DoublyLinkedList { 
    constructor() { 
        this.head = null;
        this.tail = null; 
    }
    print() { 
        let arr = []; 
        let curNode = this.head; 

        while(curNode !== null) { 
            arr.push(curNode.val) ; 
            curNode = curNode.next; 
        }
        console.log(arr); 
    }

    printReverse(){ 
        let arr = []; 
        let curNode = this.tail; 

        while(curNode !== null) {
            arr.push(curNode.val); 
            curNode = curNode.prev; 
        }
        console.log(arr); 
    }

    insert(value) { 
        if(this.head === null) { 
            this.head = new Node(value); 
            this.tail = this.head; 
            return; 
        }
        else {
            let newNode = new Node(value); 
            let curNode = this.head;
            let prevNode = null;  
            while(curNode !== null) {
                prevNode = curNode;  
                curNode = curNode.next; 
            }
            prevNode.next = newNode; 
            newNode.prev = prevNode; 
            this.tail = newNode; 
        }
    }

    delete(value) { 
        if(this.head === null) return null; 

        if(value === this.head.val) { 
            if(this.head === this.tail){
                this.head = null; 
                this.tail = null; 
            }else {
                this.head = this.head.next; 
                this.head.previous = null; 
            }
            return true; 
        }

        let curNode = this.head.next; 

        while(curNode !== null && value !== curNode.val) { 
            curNode = curNode.next; 
        }

        if(curNode === this.tail) { 
            this.tail = this.tail.prev; 
            this.tail.next = null; 
            return true; 
        }
        else if(curNode !== null){
            curNode.prev.next = curNode.next; 
            curNode.next.prev = curNode.prev; 
            return true; 
        }

        return false;
    }

    reverse(){
        let temp = this.head; 
        this.head = this.tail; 
        this.tail = temp; 

        let curNode = this.tail; 
        let prevNode = null; 
        while(curNode !== null) { 
            let temp = curNode.next; 
            curNode.next = prevNode;             
            if(prevNode !== null) { 
                prevNode.prev = curNode; 
            }
            prevNode = curNode; 
            curNode = temp; 
        }
        this.head.prev = null; 
        this.tail.next = null; 
    }
}
let dll = new DoublyLinkedList(); 

dll.insert(10);
dll.insert(20);
dll.insert(60);
dll.insert(70); 
dll.reverse(); 
dll.print(); 
dll.printReverse(); 


