// create a Node Class
class Node {
    constructor(val) {
        this.val = val;    // node value
        this.next = null; // reference to the next node or null
    }
}

// create SinglyLinkedList class having three properties - head, tail and lenth
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // instance method - push which will take a value 
    // Time : at the end of list - O (1)
    //          in middle - O(n)        

    push(value) {
        let newNode = new Node(value);
        // list is empty and head is null
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode; // set the next of the tail = to newly created node
            this.tail = newNode; // set the tail property on the list = to the newly created node ( Basically update the taiil to the last node of list)
        }
        this.length++;
        return this; // this will refer to instance of SinglyLinkedList i.e list
    }

    // pop will return deleted node
    // Time : O(n)
    pop() {
        if(!this.head){
            return undefined;
        } 
        
        let current = this.head; // pointer to the current node initially pointed to the head
        let newTail = current; // newTail pointer which will ultimately becomes new tail
        while(current.next){ // exit current node pointing to null
            newTail = current; // update the new Tail position
            current = current.next; // move current to next node
        }
        this.tail = newTail; // set the tail to the newTail
        this.tail.next = null; // point the next of the tail to null
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    /** DELETE A NODE FROM BEGINING OF THE LIST
     * 1. If list is empty, return undefined
     * 2. Store the current head property in a variable
     * 3. Set the head property to be the current head's next property
     * 4. Decrement length by 1
     * 5. Return the value of the node removed
     */

    // Time : O(1)
    shift() {
        if(!this.head) return undefined;

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    /** ADD A NODE TO THE BEGINING OF THE LIST
     * 1. Function should accept a value
     * 2. Create a new node using the value passed to the function
     * 3. If there is no head, set the head and tail = newly created node
     * 4. Otherwise, set the newly node's next property to the be the current head of the list
     * 5. set the head property on the list to be the newly created node
     */

    // Time : O(1)
    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    /** Return the next node of the given position
     * 1. Function accepts index
     * 2. If index is less than 0 or index is greater or equal to the length of the list return null
     * 2. Loop through the list until you reach the index and return the node at that specific index.
     */ 
    // let counter = 0;
    // while(counter !== idx) {
    //     current = current.next;
    //     counter++;
    // }
    get(idx) {
        if(idx < 0 || idx >= this.length) return undefined;
        let current = this.head;

        for(let i = 0; i < index; i++) {
            current = current.next
        }

        return current;
    }
    
    /** Function accepts index and value to be set at that index
     * 1. Use get fn to find the specific node 
     * 2. If the node is not found, return false
     * 3. IF the node is found, set the value of that node to be the passed value to fn and return true
     */
    set(index, newValue) {
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = newValue;
            return true;
        }

        return false;
    }

    /** Function accept the index and the value to be inserted at the index + 1 pos
     * 1. check if the index is less than 0 or index is greater than the length of the list, return false;
     * 2. If the index is equal to the length of the list, push a new node at the end of list
     * 3. If index is 0, unshift a new node to the start of the list
     * 4. Otherwise, using the get method, access the node at the index - 1;
     */

    insert(index, value) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(value);
        if(index === 0) return !!this.unshift(value);

        let newNode = new Node(value);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    /**
     * 1. If the index is less than zero or greater than the length , return undefined
     * 2. if the index is the same as the length - 1, pop 
     * 3. If the index is 0, shift
     * 4. Otherwise, using the get method, access the node at the index - 1
     * 5. Set the next property on that node to be next of the next node
     * 6. Decrement lhe length
     * 7. Return the value of the node removed
     */
    removeNode(index) {
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        if(index < 0 || index >= this.length) return undefined;

        let prevNode = this.get(index - 1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;

        return removed;
    }

    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let next = temp.next;
        let prev = null;

        for(let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
    }

    print() {
        let str = '';
        let current = this.head; 
        while(current){
            str += current.val + " -> ";
            current = current.next;
        }
        console.log(str);
    }


}

let list = new SinglyLinkedList();

list.push(4);
list.push(6);
list.push(9);
list.push(12);
// list.pop();
// list.pop();
// list.pop();

//list.shift()

// list.unshift(90);

// console.log(list.shift());
list.print();
// console.log(list.get(0));
// list.unshift(42);
// console.log(list.get(0));

// console.log(list.set(3, 99));
// console.log(list.insert(3, 40));
// list.print();

// console.log(list.removeNode(3));
list.reverse();
list.print();



