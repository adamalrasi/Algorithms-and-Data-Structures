// piece of data - val
// reference to next node -next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// var first = new Node("hi")
// first.next = new Node("there")
// first.next.next = new Node("you")
// first.next.next.next = new Node("good")

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        
    }
}

let list = new SinglyLinkedList()
list.push("hello")
list.push("goodbye")