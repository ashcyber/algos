class Graph  { 
    constructor() { 
        this.adjacencyList = {}
    }

    addVertex(vertex) { 
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];  
    }

    addEdge(ver1, ver2) { 
        if(!this.adjacencyList[ver1]) this.addVertex(ver1); 
        if(!this.adjacencyList[ver2]) this.addVertex(ver2); 

        this.adjacencyList[ver1].push(ver2);
        this.adjacencyList[ver2].push(ver1); 
    } 

    removeEdge(ver1, ver2) { 
        if(!this.adjacencyList[ver1] && !this.adjacencyList[ver2]) return null; 

        this.adjacencyList[ver1] = this.adjacencyList[ver1].filter((val) => val !== ver2); 
        this.adjacencyList[ver2] = this.adjacencyList[ver2].filter((val) => val !== ver1); 
    }

    removeVertex(vertex) { 
        if(!this.adjacencyList[vertex]) return null; 

        this.adjacencyList[vertex].forEach((v) => {
            this.removeEdge(vertex, v); 
        })

        delete this.adjacencyList[vertex]; 
    }   

}


