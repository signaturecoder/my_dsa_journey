class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    
    // WRITE THE FINDMIDDLENODE METHOD HERE // 
    findMiddleNode(){
        if(!this.head) return undefined;
        let current = this.head;
        let count = 0;
        while(current !== null) {
            count++;
            current = current.next;
        }
        current = this.head;
        let middleNodePos;
        if(count % 2 == 0) {
            middleNodePos = (count/2) + 1;
        } else {
            middleNodePos = Math.ceil(count/2);
        }
        for(let i =1; i < middleNodePos; i++) {
            current = current.next;
        }
        return current;
    }

    deleteMiddleNode() {
        if(!this.head) return undefined;
        let count = 0;
        let current = this.head;
        while(current !== null) {
            count++;
            current = current.next;
        }
        if(count === 1) return head;
        else {
            let middleNodePosition = Math.floor(count/2);
            let prev = null;
            current = this.head;
            for(let i = 0; i < middleNodePosition; i++) {
                prev = current;
                current = current.next;
            }
            prev.next = current.next;
            current.next = null;
            return this.head;
        }
    }

    // removeElements(head, val) {
    //     if(!head) return head;
    //     let current = head,temp = current, prev = null;
        
    //     while(current !== null) {
    //         if(current.value === val && prev !== null) {
    //             prev.next = temp.next;
    //             temp = null;
                
    //         } else {
    //             prev = current;
             
    //         }
    //            current = current.next;
    //             temp = current;
    //     }
    //     return head;
    // }

    // removeElements(head, val) {
    //     if(!head) return head;
    //     let current = head,temp = current, prev = null;
        
    //     while(current !== null) {
    //         if(current.value === val && prev !== null) {
    //             prev.next = temp.next;
    //             temp = null;
    //             current = current.next;
                
    //         } else {
    //             prev = current;
    //             current = current.next;
    //             temp = current;
    //         }
               
    //     }
    //     return head;
    // }


}



let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

// const middleNode = myLinkedList.findMiddleNode();
// console.log(`\nMiddle node value: ${middleNode.value}`);
// const deletemiddleNode = myLinkedList.deleteMiddleNode();
// console.log(`\nMiddle node value: ${deletemiddleNode}`);

// let myLinkedList2 = new LinkedList(1);
// myLinkedList2.push(2);
// myLinkedList2.push(3);
// myLinkedList2.push(4);
// myLinkedList2.push(5);
// myLinkedList2.push(6);

// console.log("\nOriginal list 2:");
// myLinkedList2.printList();

// const middleNode2 = myLinkedList2.findMiddleNode();
// console.log(`\nMiddle node value of list 2: ${middleNode2.value}`);


/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    Middle node value: 3
    Original list 2:
    1
    2
    3
    4
    5
    6
    Middle node value of list 2: 4
*/
