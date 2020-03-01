class Node {
    constructor(val){
        this.next = null; 
        this.val = val; 
    }
}

class LinkedList  { 
    constructor() { 
        this.head = null; 
    }

    print() {
        let cur = this.head; 
        let arr = []; 

        while(cur !== null) {
            arr.push(cur.val);
            cur = cur.next;      
        }

        console.log(arr); 
    }

    append(data) { 
        if(this.head === null) { 
            this.head = new Node(data); 
            return; 
        }
        let cur = this.head; 
        while(cur.next !== null) { 
            cur = cur.next; 
        }
        cur.next = new Node(data); 
        return; 
    }

    prepend(data) {
        if(this.head === null) { 
            this.head = new Node(data); 
            return; 
        }
        let newNode = new Node(data); 
        newNode.next = this.head; 
        this.head = newNode; 
    }

    removeByValue(value) { 
        if(this.head === null) return null; 

        let curNode = this.head; 
        let prevNode = null; 

        while(curNode !== null) { 
            console.log(curNode.val); 
            if(curNode.val === value) { 
                if(prevNode === null) {
                    let temp = this.head; 
                    this.head = temp.next; 
                }
                else { 
                    prevNode.next = curNode.next; 
                }
            }
            prevNode = curNode; 
            curNode = curNode.next; 
        }
    }

    search(value) { 
        let curNode = this.head; 
        if(this.head === null) return null; 
        let index = 0; 
        while(curNode !== null){ 
            if(curNode.val === value) return index; 

            curNode = curNode.next; 
            index++; 
        }

        return -1; 
    }

    reverse() { 
        let curNode = this.head; 
        let prevNode = null; 

        while(curNode !== null){ 
            let temp = curNode.next; 
            curNode.next = prevNode; 
            prevNode = curNode; 
            curNode = temp;
        }
        this.head = prevNode; 
    }

    reverseRecursive(node) { 
        if(node.next === null) {
            this.head = node; 
            return node; 
        }  
        else {
            this.reverseRecursive(node.next); 
            let p = node; 
            let q = node.next; 
            q.next = p; 
            p.next = null; 
        }
    }
}

let ll = new LinkedList();
ll.append(10);
ll.append(20); 
ll.append(30); 
ll.append(40); 
ll.reverseRecursive(ll.head); 
ll.print(); 
