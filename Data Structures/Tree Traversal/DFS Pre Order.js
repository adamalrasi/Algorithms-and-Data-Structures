// DFS - PreOrder

class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(val){
        const newNode = new Node(val)
        if(this.root === null) {
            this.root = newNode;
        } else {
            let current = this.root;
            while(true){
                if(val === current.val) return undefined;
                if(val < current.val){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if(val > current.val){
                    if(current.right === null){
                        current.right = newNode;
                        return this
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    find(val){
        if(this.root === null) return false;
        let current = this.root;
        let found = false;
        while(current && !found){
            if(val < current.val){
                current = current.left;
            } else if(val > current.val){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return false;
        return current;
    }
    BFS(){
        let node = this.root;
        const data = []
        const queue = [];
        queue.push(node);
        
        while(queue.length){
            node = queue.shift();
            data.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder(){
        const data = [];
        let current = this.root;
        function traverse(node){
            data.push(node.val)
            if(node.left)traverse(node.left)
            if(node.right)traverse(node.right)
        }
        traverse(current)
        return data;
    }
}

const tree = new BinarySearchTree();
tree.insert(5)
tree.insert(11)
tree.insert(1)
tree.insert(33)
tree.insert(4)
tree.insert(10)
tree.insert(2)
console.log("find", tree.find(5))
console.log("BFS", tree.BFS())
console.log("DFS Pre Order", tree.DFSPreOrder())
