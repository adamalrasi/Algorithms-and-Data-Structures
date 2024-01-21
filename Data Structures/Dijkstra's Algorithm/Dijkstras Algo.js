class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        this.values.push({val, priority});
        this.sort();
    }
    dequeue(){
        return this.values.shift();
    }
    sort(){
        this.values.sort((a, b) => a.priority - b.priority)
    };
}

class WeightedGraph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1]
        .push({node:vertex2, weight})
        this.adjacencyList[vertex2]
        .push({node:vertex1, weight})
    }
    
    Dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        const path = []
        let smallest;
        
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null;
        }
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                //done
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            } 
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbour in this.adjacencyList[smallest]){
                    let nextNode = this.adjacencyList[smallest][neighbour]
                    let candidate = distances[smallest] + nextNode.weight
                    let nextNeighbour = nextNode.node;
                    if(candidate < distances[nextNode.node]){
                        distances[nextNeighbour] = candidate;
                        previous[nextNeighbour] = smallest;
                        nodes.enqueue(nextNeighbour, candidate)
                    }
                }
            }  
            }
            return path.concat(smallest).reverse()
        }
        
    }




const g = new WeightedGraph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B", 4)
g.addEdge("A", "C", 2)
g.addEdge("B", "E", 3)
g.addEdge("C", "D", 2)
g.addEdge("C", "F", 4)
g.addEdge("D", "E", 3)
g.addEdge("D", "F", 1)
g.addEdge("E", "F", 1)
console.log(g.Dijkstra("A", "F"))
console.log(g.adjacencyList)


