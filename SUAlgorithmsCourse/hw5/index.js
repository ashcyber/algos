const fs = require('fs'); 

const data = fs.readFileSync('dijkstraData.txt').toString();
let arr = data.split('\n');

class PriorityQueue { 
    constructor() { 
        this.values = []; 
    }

    enqueue(val, priority) { 
        this.values.push({val, priority}); 
        this.sort(); 
    }; 

    dequeue() { 
        return this.values.shift(); 
    }; 

    set(val, priority) { 
        this.values.forEach((node, idx) => {
            if(parseInt(node.val) === parseInt(val)){ 
                this.values[idx]["priority"] = priority; 
            }
        })
        this.sort(); 
    }

    sort() { 
        this.values.sort((a,b) => a.priority - b.priority); 
    };     
}

class WeightedGraph { 
    constructor() { 
        this.adj_list = {}; 
    }
    addEdge(v1, v2, weight) { 
        if(this.adj_list[v1] === undefined) this.adj_list[v1] = []; 
        this.adj_list[v1].push({node: v2, weight: weight}); 
    }

    dijkstra(start) { 
        const nodes = new PriorityQueue(); 
        const distances = {}; 
        const previous = {};
        let smallest; 

        for(let vertex in this.adj_list) { 
            if(vertex === start) { 
                distances[vertex] = 0; 
                nodes.enqueue(vertex, 0);  
            }
            else { 
                distances[vertex] = 1000000; 
                nodes.enqueue(vertex, 1000000); 
            }

            previous[vertex] = null; 
        }
        
        while(nodes.values.length) { 
            smallest = nodes.dequeue().val; 
            if(smallest && distances[smallest] !== 1000000){
                for(let neigbour of this.adj_list[smallest]){
                    let candidate = distances[smallest] + neigbour.weight; 
                    if(candidate < distances[neigbour.node]){
                        distances[neigbour.node] = candidate; 
                        previous[neigbour.node] = smallest; 
                        nodes.set(neigbour.node, candidate);
                    }
                }
            }
        }
        let qarr = [7,37,59,82,99,115,133,165,188,197]; 
        for(let val of qarr) { 
            console.log(val,distances[val])
        }
    }
    
}

let g = new WeightedGraph(); 
for(let line of arr) { 
    let l = line.split('\t'); 

    let v1 = l[0];  
    let vertexes = (l.slice(1)).filter((v) => v !== '\r');
    vertexes.forEach((v) => {
        let [v2, weight] = v.split(','); 
        g.addEdge(v1, parseInt(v2), parseInt(weight));  
    })
}

g.dijkstra("1"); 