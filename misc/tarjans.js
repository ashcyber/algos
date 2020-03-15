
class Graph{
    constructor(){
        this.adj_list = {}
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
    
    getVertices() { 
        return Object.keys(this.adj_list); 
    }

    getNeighbours(vertex) { 
        return this.adj_list[vertex];  
    }
}


// Strongly Connected Components 
function targan(graph) { 
    let allVertices = graph.getVertices(); 
    
    let id = 0; 
    let sccCount = 0; 
    let ids = {}; 
    let lowLinks = {}; 
    let onStack = {}; 
    let stack = []; 
    let visited = {}; 

    for(let i = 0; i < allVertices.length; i++) { 
        onStack[allVertices[i]] = false; 
        visited[allVertices[i]] = false;
    }

    function dfs(curVertexDFS){
        stack.push(curVertexDFS); 
        onStack[curVertexDFS] = true; 
        visited[curVertexDFS] = true;
        ids[curVertexDFS] = id; 
        lowLinks[curVertexDFS] = id; 
        id++;   

        let neighboursDFS = graph.getNeighbours(curVertexDFS);
        for(let ni = 0; ni < neighboursDFS.length; ni++){
            let neighDFS = neighboursDFS[ni]; 
            if(!visited[neighDFS]){
                dfs(neighDFS); 
            }   
            if(onStack[neighDFS]) {
                lowLinks[curVertexDFS] = Math.min(lowLinks[neighDFS], lowLinks[curVertexDFS]); 
            }         
    
        } 


        if(ids[curVertexDFS] === lowLinks[curVertexDFS]){
            for(let s = 0; s < stack.length; s++) { 
                let popVal = stack.pop();
                onStack[popVal] = false; 
                // lowLinks[popVal] = ids[popVal]; 
                if(popVal === curVertexDFS) break; 
            }
            
            sccCount++; 
        }
    }


    for(let i = 0; i < allVertices.length; i++) { 
        let curVertex = allVertices[i]; 
        if(!visited[curVertex]){
            dfs(curVertex); 
        }       
    }
    console.log(ids); 
    console.log(lowLinks); 
    console.log(sccCount)
}

let g = new Graph();
g.addEdge("A","B")
g.addEdge("B","C");
g.addEdge("C","D");
g.addEdge("D","A"); 
g.addEdge("D","E"); 
targan(g); 
