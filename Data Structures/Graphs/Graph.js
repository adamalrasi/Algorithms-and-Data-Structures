class Graph{
    constructor(){
        this.adjacencyList = {
            "Tokyo": ["Dallas", "Hong Kong"],
            "Dallas": ["Tokyo", "Aspen", "Hong Kong", "LA"],
            "Aspen": ["Dallas"],
            "Hong Kong": ["Tokyo", "Dallas", "LA"],
            "LA": ["Hong Kong", "Dallas"]
        }
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
}

const g = new Graph()
g.removeVertex("LA")
g.removeVertex("Hong Kong")
console.log(g)

