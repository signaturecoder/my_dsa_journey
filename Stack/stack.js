// stack using linked list

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// LIFO = Last In First Out
class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    // Time : O(1)
    push(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this;
    }

    // Time : O(1)
    pop() {
        if(this.length === 0) return undefined;

        let temp = this.top;
        this.top = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }
}

let stack = new Stack();

stack.push(4);

console.log(stack);