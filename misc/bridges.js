
class Graph{
    constructor(){
        this.adj_list = {}
    }

    addEdge(vertex1, vertex2) { 
        this.addVertex(vertex1); 
        this.addVertex(vertex2); 
        this.adj_list[vertex1].push(vertex2); 
        this.adj_list[vertex2].push(vertex1);
    }

    addVertex(vertex) {
        if(!this.adj_list[vertex])
            this.adj_list[vertex] = []
    }
    
    getVertices() { 
        return Object.keys(this.adj_list); 
    }

    getNeighbours(vertex) { 
        return this.adj_list[vertex];  
    }
}

function bridges(graph) { 
    let allVertices = graph.getVertices(); 
    let id = 0; 
    let ids = {};
    let lowLinks = {}; 
    let visited = {}; 
    let bridges = []; 

    allVertices.forEach((vertex) => {
        visited[vertex] = false; 
    }); 


    function dfs(vertexDFS, parentDFS){
        visited[vertexDFS] = true; 
        lowLinks[vertexDFS] = id;
        ids[vertexDFS] = id   
        id = id + 1; 
        

        let neighboursDFS = graph.getNeighbours(vertexDFS); 

        for(let ni = 0; ni < neighboursDFS.length; ni++){
            let neighbourDFS = neighboursDFS[ni];
            if(neighbourDFS === parentDFS) continue; 
            if(!visited[neighbourDFS]){
                dfs(neighbourDFS, vertexDFS); 
                lowLinks[vertexDFS] = Math.min(lowLinks[neighbourDFS], lowLinks[vertexDFS]); 
                if(ids[vertexDFS] < lowLinks[neighbourDFS]){
                    bridges.push([vertexDFS,neighbourDFS]);
                }   
            }
            else{
                lowLinks[vertexDFS] = Math.min(lowLinks[neighbourDFS], lowLinks[vertexDFS]);
            }
        }
    }

    for(let v = 0; v < allVertices.length; v++){
        let curVertex = allVertices[v]; 
        if(!visited[curVertex]){
            dfs(curVertex, -1)
        }
    }
    return bridges;
}

let g = new Graph();
g.addEdge("A","C")
g.addEdge("A","B")
g.addEdge("B","C")
g.addEdge("B","D")
g.addEdge("D","E")
g.addEdge("E","F")
g.addEdge("F","D")
g.addEdge("F","G")
g.addEdge("G","H")


console.log("Bridges ",bridges(g)); 
