class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        const poppedNode = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode
    }
    shift(){
        if(this.length === 0) return undefined;
        const oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead
    }
    get(idx){
        if(idx < 0 || idx >= this.length) return null;
        let count;
        let current;
        if(idx <= this.length/2){
            count = 0;
            current = this.head;
            while(count !== idx){
                current = current.next;
                count++
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== idx){
                current = current.prev;
                count--
            }
        }
        return current;
    }
    insert(idx, val){
        if(idx < 0 || idx > this.length) return false;
        if(idx === 0) return this.unshift(val);
        if(idx === this.length) return this.push(val);
        
        const newNode = new Node(val);
        const beforeNode = this.get(idx-1);
        const afterNode = beforeNode.next;
        
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(idx){
        if(idx < 0 || idx >= this.length) return undefined;
        if(idx === 0) return this.shift();
        if(idx === this.length-1) return this.pop();

        const removedNode = this.get(idx);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next, removedNode.prev = null, null
        this.length--;
        return removedNode;
    }
}
 const list = new DoublyLinkedList()
 list.push("1")
 list.push("2")
 list.push("3")
 list.push("a")
 list.insert(1, "harry")
 console.log("get", list.remove(0))
 console.log(list)