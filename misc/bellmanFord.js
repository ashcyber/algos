
class Graph{
    constructor(){
        this.adj_list = {}
    }

    addEdge(vertex1, vertex2, weight) { 
        this.addVertex(vertex1); 
        this.addVertex(vertex2); 
        this.adj_list[vertex1][vertex2] = weight; 
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

 
function bellmanFord(graph, source){
    let allVertices = graph.getVertices();
    let V = allVertices.length;  
    
    let distances = {}; 
    let previousVertex = {}; 

    for(let vert of allVertices){
        distances[vert] = Infinity; 
        previousVertex[vert] = null; 
    }    
    distances[source] = 0; 


    for(let vi = 0; vi < V - 1; vi++) { 
        let isChanged = false; 
        for(let idx = 0; idx < V; idx++){
            let curVertex = allVertices[idx]; 
            if(distances[curVertex] === Infinity) continue; 
            
            let neighbours = graph.getNeighbours(curVertex); 
            for(let neighbour of neighbours){
                let newDistance = distances[curVertex] + graph.getEdgeWeight(curVertex, neighbour); 
                if(newDistance < distances[neighbour]){
                    distances[neighbour] = newDistance; 
                    isChanged = true; 
                }
            }
        } 
    }

  return distances 
}

let g = new Graph(); 
g.addEdge("S","E",8); 
g.addEdge("S","A",10); 
g.addEdge("E","D", 1); 
g.addEdge("D","A",-4); 
g.addEdge("D","C", -1);
g.addEdge("C","B", -2); 
g.addEdge("B","A",  1);
g.addEdge("A","C", 2); 
console.log(bellmanFord(g,"S"));  

