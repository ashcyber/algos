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
                this.sort(); 
                return 
            }
        })
    }

    sort() { 
        this.values.sort((a,b) => a.priority - b.priority); 
    };

    isEmpty(){
        return this.values.length === 0; 
    }
}

class Graph{
    constructor(){
        this.adj_list = {}
    }

    addEdge(vertex1, vertex2, weight) { 
        this.addVertex(vertex1); 
        this.addVertex(vertex2); 
        this.adj_list[vertex1][vertex2] = weight; 
        this.adj_list[vertex2][vertex1] = weight; 
    }

    addVertex(vertex) {
        if(!this.adj_list[vertex])
            this.adj_list[vertex] = {}
    }

    getEdgeWeight(vertex1, vertex2) { 
        if(this.adj_list[vertex1] === undefined) return Infinity; 
        if(!this.adj_list[vertex1].hasOwnProperty(vertex2)) return Infinity; 
        return this.adj_list[vertex1][vertex2]; 
    }

    getVertices() { 
        return Object.keys(this.adj_list); 
    }

    getNeighbours(vertex) { 
        return Object.keys(this.adj_list[vertex]); 
    }
}


function dijkstras(graph, start, end) { 
    // Initialization

    let distances = {};
    let previous_vertex = {}; 
    let visited = {}; 
    let pq = new PriorityQueue();
    pq.enqueue(start, 0); 

    let allVertices = graph.getVertices();
    allVertices.forEach((vertex, idx) => { 
        distances[vertex] = Infinity; 
        previous_vertex[vertex] = ""; 
        visited[vertex] = false; 
        if(idx > 0) pq.enqueue(vertex, Infinity)
    })
    distances[start] = 0;

    // Main Loop 
    while(!pq.isEmpty()){
        let { val: current_vertex, priority } = pq.dequeue()

        if(distances[current_vertex] < priority) continue; 

        visited[current_vertex] = true; 
        let neighbours =  graph.getNeighbours(current_vertex); 
        
        neighbours.forEach((neighbour) => {
            if(!visited[neighbours]) { 
                let new_distance = graph.getEdgeWeight(current_vertex, neighbour) + distances[current_vertex]; 

                if(new_distance < distances[neighbour]) { 
                    distances[neighbour] = new_distance; 
                    previous_vertex[neighbour] = current_vertex;  
                    pq.enqueue(neighbour,distances[neighbour] )
                }
            }
        })
    } 

    console.log(`Distances`, distances); 
    console.log(`Previous Vertex:`,previous_vertex); 
    
    let path = []; 
    let cur_vert = end; 
    while(previous_vertex[cur_vert] !== ""){
        path.push(cur_vert); 
        cur_vert = previous_vertex[cur_vert];
    }
    path.push(start); 

    console.log(`Path: `, path.reverse().join('->')); 
}

let g = new Graph(); 

g.addEdge("A", "B", 4); 
g.addEdge("A", "C",1); 
g.addEdge("C", "B",2); 
g.addEdge("C","D", 5); 
g.addEdge("B","D",1); 
g.addEdge("D","E",3); 

dijkstras(g, "A", "E")