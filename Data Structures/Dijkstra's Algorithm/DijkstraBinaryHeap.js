class PriorityQueue{
    constructor(){
        this.values = []
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority)
        this.values.push(newNode);
        this.bubbleUp();
        return newNode
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx]
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx.priority > length.priority){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ){
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
    
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
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
console.log(g.Dijkstra("A", "E"))
console.log(g.adjacencyList)


