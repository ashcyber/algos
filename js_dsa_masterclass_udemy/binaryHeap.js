/**
 * left child => 2n + 1 
 * right child => 2n + 2
 * parent of node => Math.floor((n - 1) / 2)
 */

class MaxBinaryHeap { 
    constructor() { 
        this.values = []; 
        this.length = 0; 
    }

    insert(element) { 
        this.values.push(element); 
        this.length++; 
        this.bubbleUp(); 
    }

    bubbleUp(){ 
        let idx = this.length - 1; 
        let last = this.values[idx];
        let parent = Math.floor((idx - 1) / 2); 
        
        if(parent >= 0) { 
            while(this.values[parent] <= this.values[idx]){ 
                let temp = this.values[parent]; 
                this.values[parent] = this.values[idx]; 
                this.values[idx] = temp; 

                idx = parent; 
                parent = Math.floor((idx - 1) / 2); 
            }
        }
    }

    bubbleDown() { 
        let idx = 0; 
        while(true) {
            let leftIdx = 2*idx + 1; 
            let rightIdx = 2*idx + 2;
            let swapIdx = null; 

            if(leftIdx < this.length) { 
                if(this.values[leftIdx] > this.values[idx]) {
                    swapIdx = leftIdx; 
                 }
            }

            if(rightIdx < this.length) { 
                if(
                    (swapIdx === null && this.values[rightIdx] > this.values[idx]) ||
                    (swapIdx !== null && this.values[rightIdx] > this.values[leftIdx])
                ){
                    swapIdx = rightIdx; 
                }
            }
            
            if(swapIdx === null) break; 

            let temp = this.values[swapIdx]; 
            this.values[swapIdx] = this.values[idx]; 
            this.values[idx] = temp; 

        }      
    }   
    
    extractMax() {  
        let root = this.values[0]; 
        let end = this.values.pop(); 

        if(this.values.length > 0) {
            
            this.values[0] = end; 
            this.length--; 
            this.bubbleDown(); 
        
            
        }

        return root; 
        
    }

}

