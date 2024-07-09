/**
 * 
 * https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/?envType=daily-question&envId=2024-07-05
 * 
 * Ans: https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/solutions/5418261/linkedlist-tutorial-find-the-minimum-and-maximum-number-of-nodes-between-critical-points/?envType=daily-question&envId=2024-07-05
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class Node {
    constructor(val) {
        this.val = val;    // node value
        this.next = null; // reference to the next node or null
    }
}


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

    print() {
        let str = '';
        let current = this.head; 
        while(current){
            str += current.val + " -> ";
            current = current.next;
        }
        console.log(str);
        console.log(this);
    }
 }

function CreateList(arr) {
    let list = new SinglyLinkedList();
    arr.forEach(el => list.push(el));
    list.print();
}
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    let current = head.next;
    let prev = head;
    let countOfNodes = 0;
    while(prev !== null){
        countOfNodes++;
        prev = prev.next;
        console.log("PRev ", prev);
    }

    console.log("Current Nodes", countOfNodes);
};



const head = [5,3,1,2,5,1,2];
CreateList(head);


console.log(nodesBetweenCriticalPoints(head));