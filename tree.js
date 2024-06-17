class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }
}

const bst = new BST();
const nodeA = new Node(1);
const nodeB = new Node(2);
const nodeC = new Node(3);
const nodeD = new Node(4);


bst.root = nodeA;
nodeA.left = nodeB;
nodeB.left = nodeC;
nodeA.right = nodeB;
console.log(nodeA);