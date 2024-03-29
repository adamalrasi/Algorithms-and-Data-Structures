class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) this.tail = null;
        return currentHead
    }
    unshift(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter++
        }
        return current
    }
    set(idx, val){
        const foundNode = this.get(idx)
        if(foundNode){
            foundNode.val = val;
            return true
        }
        return null
    }
    insert(idx, val){
        if(idx < 0 || idx > this.length) return false;
        if(idx === this.length) return !!this.push(val);
        if(idx === 0) return !!this.unshift(val);
        
        const newNode = new Node(val);
        const prev = this.get(idx -1);
        const temp = prev.next;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(idx){
        if(idx < 0 || idx >= this.length) return false;
        if(idx === 0) return this.shift();
        if(idx === this.length - 1) return this.pop();
        const prevNode = this.get(idx -1);
        const removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next = null;
        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev
            prev = node;
            node = next;
        }
        return this;
    }
    
}

let list = new SinglyLinkedList()
list.push("hello")
list.push("goodbye")