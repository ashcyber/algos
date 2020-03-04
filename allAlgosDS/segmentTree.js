let isPowerOfTwo = function(val) { 
    if(val === 0) return false; 

    let v = Math.log2(val);
    let v2 = Math.floor(v); 
    
    if(v === v2) return true;
    
    return false 
}
 
class segmentTree { 

    constructor(inputArray){ 
        this.inputArray = inputArray; 
        this.segmentTree = this.initSegmentTree(); 
        this.buildSegmentTree(); 
    }

    /**
     * @param {number[]} inputArray
     * @return {number[]}
     */
    initSegmentTree() { 
        if(isPowerOfTwo(this.inputArray.length)) {
            return new Array(2 * this.inputArray.length - 1); 
        }else {
            let pow = Math.floor(Math.log2(this.inputArray.length)) + 1; 
            let num = Math.pow(2,pow); 
            return new Array(2*num - 1); 
        }
    }

    buildSegmentTree() { 
        let segTree = this.segmentTree.fill(Infinity); 
        let inputArr = this.inputArray; 
        let buildTree = function(low, high, pos){ 
            if(low === high) { 
                segTree[pos] = inputArr[low];
                return;  
            }
            let mid = Math.floor((low + high) / 2); 

            buildTree(low, mid, 2*pos + 1); 
            buildTree(mid+1, high, 2*pos + 2);
            segTree[pos] = Math.min(segTree[2*pos+1], segTree[2*pos+2]); 
             
        }
        buildTree(0, inputArr.length-1, 0);         
        this.segmentTree = segTree; 
    }

    rangeMinQuery(inpLow, inpHigh) { 
        let segTree = this.segmentTree; 
        let rMinQuery = function(qLow, qHigh, low, high, pos) {
             
            if(qLow <= low && qHigh >= high) {
                return segTree[pos]; 
            }
            
            if(qLow > high || qHigh < low) {           
                return Infinity
            }
            
            let mid = Math.floor((low + high) / 2); 

            return Math.min(rMinQuery(qLow, qHigh, low, mid, 2*pos+1), 
            rMinQuery(qLow, qHigh, mid+1, high, 2*pos+2)); 
        }

        return rMinQuery(inpLow, inpHigh,0,this.inputArray.length-1,0); 
    }


}

let st = new segmentTree([-1,2,4,0]); 

console.log(st.rangeMinQuery(1,1)); 
