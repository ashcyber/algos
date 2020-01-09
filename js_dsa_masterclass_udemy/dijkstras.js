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
            if(node.val === val){ 
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
    constructor(){ 
        this.adjacencyList = {};  
    }

    addVertex(vertex) { 
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []; 
    }   

    addEdge(vertex1, vertex2, weight) { 
        this.adjacencyList[vertex1].push({node: vertex2, weight}); 
        this.adjacencyList[vertex2].push({node: vertex1, weight}); 
    }

    dijkstra(start, finish) { 
        const nodes = new PriorityQueue(); 
        const distances = {}; 
        const previous = {}; 
        let smallest; 
        let path = []; 
        // intial state 
        for(let vertex in this.adjacencyList) { 
            if(vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);  
            }
            else { 
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);  
            }

            previous[vertex] = null; 
        }

        while(nodes.values.length) { 
            smallest = nodes.dequeue().val; 
            if(smallest === finish) { 
                let endNode = finish; 
                while(endNode !== null) { 
                    path.unshift(endNode); 
                    endNode = previous[endNode]; 
                }
                break; 
            }
            if(smallest || distances[smallest] !== Infinity) { 
                for(let neighbour of this.adjacencyList[smallest]){ 
                    let candidate = distances[smallest] + neighbour.weight; 
                    if(candidate < distances[neighbour.node]) { 
                        distances[neighbour.node] = candidate; 
                        previous[neighbour.node] = smallest; 
                        nodes.set(neighbour.node, candidate);
                    }
                }
            }
        }
        return path; 
    }
}

let q = new PriorityQueue(); 
let g = new WeightedGraph(); 

g.addVertex("A"); 
g.addVertex("B"); 
g.addVertex("C"); 
g.addVertex("D"); 
g.addVertex("E"); 
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1); 


let ans = g.dijkstra("A", "E"); 
console.log(ans); 