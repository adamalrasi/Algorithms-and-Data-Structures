class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) 
        this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }
    removeEdge(v1, v2){
        this.adjacencyList[v1] = this.adjacencyList[v1]
        .filter(vertex => vertex !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2]
        .filter(vertex => vertex !== v1)
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    
    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        
        function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex]?.forEach(neightbour => {
              if(!visited[neightbour]) return dfs(neightbour)  
            })
        }
            dfs(start)
            return result;
    }
    DFSIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        const adjacencyList = this.adjacencyList;
        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);
            
            adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    stack.push(neighbour)
                }
            })
        }
        return result;
    }
}

const g = new Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addVertex("I")

g.addEdge("I", "F")
g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")
console.log(g.depthFirstRecursive("I"))
console.log(g.DFSIterative("I"))
console.log(g)





















