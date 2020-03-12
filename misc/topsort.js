class Graph{
    constructor(){
        this.adj_list = []
    }

    addEdge(vertex1, vertex2) { 
        this.addVertex(vertex1); 
        this.addVertex(vertex2); 
        this.adj_list[vertex1].push(vertex2); 
    }

    addVertex(vertex) {
        if(!this.adj_list[vertex])
            this.adj_list[vertex] = []
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
        return Object.values(this.adj_list[vertex]); 
    }
}


function topsort(graph) { 
    
    let allVertices = graph.getVertices(); 
    let numberOfVertices = allVertices.length; 
    let ordering = new Array(numberOfVertices); 
    let visited = []; 
    let pos = numberOfVertices - 1; 
    
    function isVisited(vertex) {return visited.indexOf(vertex) !== -1} 
    function dfs(g, vertex) { 
        if(vertex !== [] && !isVisited(vertex)){
            let neighbours = g.getNeighbours(vertex); 
            for(let idxDFS = 0; idxDFS < neighbours.length; idxDFS++) { 
                dfs(g, neighbours[idxDFS]); 
            }
            ordering[pos--] = vertex; 
            visited.push(vertex);
        }
    }
    for(let idx = 0; idx < numberOfVertices; idx++){
        let curVertex = allVertices[idx]; 
        dfs(graph, curVertex) 
    }

    console.log(ordering)
}

let g = new Graph(); 
g.addEdge("C","A"); 
g.addEdge("C","B");
g.addEdge("A","D"); 
g.addEdge("B","D");
g.addEdge("E","A"); 
g.addEdge("E","D");
g.addEdge("E","F"); 
g.addEdge("D","G"); 
g.addEdge("D","H"); 
g.addEdge("G","I"); 
g.addEdge("F","K"); 
g.addEdge("F","J"); 
g.addEdge("K","J"); 
g.addEdge("H","J"); 
g.addEdge("J","M"); 
g.addEdge("J","L"); 
g.addEdge("H","I"); 
g.addEdge("I","L");  
topsort(g)