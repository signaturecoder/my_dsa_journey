// Implement Queue using LinkedList
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    // add item to the queue O(1)
    enqueue(value) {
        const newNode = new Node(value);

        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    // remove item from queue Time: O(1)
    dequeue() {
        if(this.length === 0) return undefined;

        let temp = this.first;
        if(this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = temp.next;
            temp.next = null;    
        }

        this.length--;
        return temp;
    }
}

let queue = new Queue();

queue.enqueue(5);