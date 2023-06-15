class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {

        if(this.length === 0) return undefined;

        let temp = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null; 
        }
        this.length--;

        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // remove item from beginning
    shift() {
        if(this.length === 0) return undefined;
        let temp = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = temp.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp;
    }

    get(index) {
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.head;

        if(index < this.length/2) {
            for(let i = 0; i < index; i++) {
                temp = temp.next;
            }
        } else {
            temp = this.tail;
            for(let i = this.length - 1; i > index; i--) {
                temp = temp.prev;
            }
        }

        return temp;
    }

    set(index, newValue) {
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = newValue;
            return true;
        }

        return false;
    }

    insert(index, value) {
        if(index === 0) return !!this.unshift(value);
        if(index === this.length) return !!this.push(value);
        if(index < 0 || index > this.length) return false;
        
        let newNode = new Node(value);
        let before = this.get(index - 1);
        let after = before.next;
        before.next = newNode;
        newNode.prev = before;
        newNode.next = after;
        after.prev = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        if(index < 0 && index >= this.length) return undefined;

        let temp = this.get(index);
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        temp.next = null;
        temp.prev = null;

        this.length--;
        return temp;
    }

}

let doubleList = new DoublyLinkedList();


doubleList.push(5);
// dobuleList.push(8);
// dobuleList.push("Last item");
console.log(doubleList);