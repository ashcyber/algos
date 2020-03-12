
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

// TimeComplexity O(N^3)
function adjListToMatrix(graph) { 
    let allVertices = graph.getVertices(); 
    let V = allVertices.length; 
    
    let adjMat = new Array(V); 
    for(let idx = 0; idx < V; idx++) {
        adjMat[idx] = new Array(V); 
    }

    for(let row = 0; row < V; row++) { 
        for(let col = 0; col < V; col++){
            if(row === col) adjMat[row][col] = 0; 
            else adjMat[row][col] = graph.getEdgeWeight(allVertices[row], allVertices[col]); 
            
        }
    }

    return adjMat; 
}

function floydWarshall(graph) {
    
    let adjMat = adjListToMatrix(graph); 
    let V = adjMat.length; 
    
    for(let k = 0; k < V; k++){
        for(let i = 0; i < V; i++){
            for(let j = 0; j < V; j++){
                if(adjMat[i][j] > adjMat[i][k] + adjMat[k][j]){
                    adjMat[i][j] = adjMat[i][k] + adjMat[k][j];  
                }
            }
        }
    }
    console.log(adjMat); 

}


let g = new Graph(); 
g.addEdge('1','3',-2); 
g.addEdge('2','1',4); 
g.addEdge('2','3',3); 
g.addEdge('4','2',-1); 
g.addEdge('3','4',2); 

floydWarshall(g); 
