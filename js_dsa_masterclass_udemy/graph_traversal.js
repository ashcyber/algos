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


    dfsRecursive(start) { 
        let result = []; 
        let visited = {}; 
        let adjacencyList = this.adjacencyList; 

        (function dfs(vertex) { 
            if(!vertex) return null; 
            visited[vertex] = true; 
            result.push(vertex); 
            adjacencyList[vertex].forEach((v) => {
                if(!visited[v])
                    return dfs(v); 
            })
        })(start)

        return result; 
    }

    bfs(vertex) { 
        let result = []; 
        let visited = {}; 
        let adjacencyList = this.adjacencyList; 
        let q = []; 
        q.push(vertex); 

        while(q.length > 0) { 
            let v = q.shift(); 
            if(!visited[v]) { 
                visited[v] = true; 
                result.push(v); 
                adjacencyList[v].forEach((val) => {
                    q.push(val); 
                })
            }
        }
        return result;         
    }
}


let g = new Graph(); 
g.addEdge("A", "B"); 
g.addEdge("A", "C"); 
g.addEdge("B", "D"); 
g.addEdge("C", "E"); 
g.addEdge("D", "E"); 
g.addEdge("D", "F"); 
g.addEdge("E", "F"); 
console.log(g.dfsRecursive("A")); 
console.log(g.bfs("A")); 