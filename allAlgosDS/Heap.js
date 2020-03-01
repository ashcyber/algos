class MaxBinaryHeap { 
    constructor() { 
        this.values = []; 
        this.length = 0; 
    }
    print() { 
        console.log(this.values); 
    }

    getParent(idx) {
        return Math.floor((idx - 1) / 2); 
    }

    getLeftChild(idx) { 
        let index = 2 * idx + 1; 
        if(index < this.length) { 
            return 2 * idx + 1; 
        }
        return -1; 
    }
    getRightChild(idx) { 
        let index = 2 * idx + 2; 
        if(index < this.length){
            return 2 * idx + 2; 
        } 
    }
    swap(i,j) { 
        let temp = this.values[i]; 
        this.values[i] = this.values[j]; 
        this.values[j] = temp; 
    }

    insert(value) { 
        this.values.push(value); 
        this.length++; 
        this.bubbleUp(); 
    }

    bubbleUp(){
        let curIdx = this.length - 1; 
        let parentIdx = this.getParent(curIdx); 
        while(this.values[parentIdx] < this.values[curIdx]) { 
            this.swap(parentIdx, curIdx); 
            curIdx = parentIdx;
            parentIdx = this.getParent(curIdx);  
        }
    }

    sinkDown() { 
        let parentIdx = 0; 
        while(true) { 
            let swapIdx = null; 
            let leftIdx = this.getLeftChild(parentIdx); 
            let rightIdx = this.getRightChild(parentIdx); 

            if(leftIdx !== -1 && this.values[parentIdx] < this.values[leftIdx]) { 
                swapIdx = leftIdx;
            }

            if(rightIdx !== -1) {  
                if(swapIdx !== null && (this.values[leftIdx] < this.values[rightIdx]) || 
                   swapIdx === null && (this.values[parentIdx] < this.values[rightIdx])) { 
                       swapIdx = rightIdx; 
                   }
            }

            if(swapIdx === null) return; 

            this.swap(parentIdx,swapIdx); 
            parentIdx = swapIdx; 
        }
    }
    extractMax() { 
        this.swap(0,this.length -1);
        let element = this.values.pop();
        this.length--;  
        this.sinkDown(); 
        return element; 
    }
}

class MinBinaryHeap { 
    constructor() { 
        this.values = []; 
        this.length = 0; 
    }

    print() { 
        console.log(this.values); 
    }

    getParent(idx) {
        return Math.floor((idx - 1) / 2); 
    }

    getLeftChild(idx) { 
        let index = 2 * idx + 1; 
        if(index < this.length) { 
            return 2 * idx + 1; 
        }
        return -1; 
    }
    getRightChild(idx) { 
        let index = 2 * idx + 2; 
        if(index < this.length){
            return 2 * idx + 2; 
        } 
    }
    swap(i,j) { 
        let temp = this.values[i]; 
        this.values[i] = this.values[j]; 
        this.values[j] = temp; 
    }

    insert(value) { 
        this.values.push(value); 
        this.length++; 
        this.bubbleUp(); 
    }

    bubbleUp(){ 
        let curIdx = this.length - 1; 
        let parentIdx = this.getParent(curIdx); 
        if(this.values[curIdx] < this.values[parentIdx]) { 
            this.swap(curIdx, parentIdx); 
            curIdx = parentIdx; 
            parentIdx = this.getParent(curIdx); 
        }
    }

    sinkDown() { 
        let parentIdx = 0; 
        while(true) { 
            let swapIdx = null; 
            let leftIdx = this.getLeftChild(parentIdx); 
            let rightIdx = this.getRightChild(parentIdx); 

            if(leftIdx !== -1 && this.values[parentIdx] > this.values[leftIdx]) { 
                swapIdx = leftIdx;
            }

            if(rightIdx !== -1) {  
                if(swapIdx !== null && (this.values[leftIdx] > this.values[rightIdx]) || 
                   swapIdx === null && (this.values[parentIdx] > this.values[rightIdx])) { 
                       swapIdx = rightIdx; 
                   }
            }

            if(swapIdx === null) return; 

            this.swap(parentIdx,swapIdx); 
            parentIdx = swapIdx; 
        }
    }

    extractMin(){ 
        this.swap(0,this.length -1);
        let element = this.values.pop(); 
        this.length--; 
        this.sinkDown(); 
        return element; 
    }
}
