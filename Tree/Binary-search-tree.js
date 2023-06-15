class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// BST 
class BST {
    constructor() {
        this.root = null;
    }

    /**
     *  
     * 1. Create Node
     * 2. if root == null, roor = newNode and return tree;
     * 3. point a temporay ref to root, temp = root
     * 4. while loop
     * 5.   if newNode === temp return undefined
     * 6.   if < left else > right
     * 7.   if null  insert newNode else move to next
     * 
     * TIME : Best case and average case is O(log n) , worst case : O(n)
     */

    insert(value) {
        const newNode = new Node(value);

        if(this.root == null) {
            this.root = newNode;
            return this;
        } 

        let temp = this.root;
        while(true) {
            if(newNode.value === temp.value) return undefined;

            if(newNode.value < temp.value) {
                if(temp.left === null) {
                    temp.left = newNode;
                    return this;
                } else {
                    temp = temp.left;
                }
            } else {
                if(temp.right === null) {
                    temp.right = newNode;
                    return this;
                } else {
                    temp = temp.right;
                }
            }
        }
    }

    /**
     * if root === null return false
     * assign root to temp variable , let temp = this.root
     * while (temp)
     *      if target < left
     *      else if target > right
     *      else target == temp and return true
     * return false; 
     * 
     * TIME : O(log n)
     */

    contains(target) {

        if(this.root === null) return false;

        let temp = this.root;

        while(temp) {
            if(target < temp.value){
                    temp = temp.left;
            } else if(target > temp.value){
                    temp = temp.right;
            } else {
                return true;
            } 
        }
        return false;
    }
    /** Return the minimum node value of a tree or subtree
     * 1. Pass any node value which will act as current node 
     * 2. Loop through the left section of tree until it becomes null
     * 3. IF null return the current node value
     */
    minValueNode(currentNode) {
        while(currentNode.left != null) {
            currentNode = currentNode.left;
        }
        return currentNode;
    }

    /** BFS Traversal 
     * 1. Get a refference to root of tree ; currentNode = root
     * 2. Declare two arrays one to hold the node in its "queue" and another array to return the resultant array after emptying queue repeateadly
     * 3. push the currentNode to queue 
     * 3. while queue has elements
     *      a. shift the element from queue
     *      b. push that element to the results array
     *      c. Check if there is left of currentNode, push that node to queue
     *      d. Check if there is right of currentNode, push that node to queue as well
     * 4. Return the results array
     * 
     * TIME : O(N)
     * Space : O(N)
     */

    BFS() {
        let currentNode = this.root;
        let queue = [];
        let results = [];
        queue.push(currentNode);

        while(queue.length) {
            currentNode = queue.shift();
            results.push(currentNode.value);
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        }

        return results;
    }

    /**
     * 1. Maintain a call stack for recursive call the function and a results array
     * 2. first, currentNode value is pushed to the results array
     * 3. Check if there are left child of current node, call recursive fn on left side of the node i.e traverse(currentNode.left)
     * 4. Check if there are right child of current node, call recursive fn on right side of the node i.e traverse(currentNode.right)
     * 5. call traverse fn and pass the root of the tree
     * 6. return the results array.
     */
    DFSPreorder() {
        let results = [];
        function traverse(currentNode) {
            results.push(currentNode);

            if(currentNode.left) traverse(currentNode.left);
            if(currentNode.right) traverse(currentNode.right);
        }

        traverse(this.root);
        return results;
    }

    DFSPostorder() {
        let results = [];
        function traverse(currentNode) {
            if(currentNode.left) traverse(currentNode.left);
            if(currentNode.right) traverse(currentNode.right);
            results.push(currentNode);

        }

        traverse(this.root);
        return results;
    }

    /**
     * 1. Always Remember - Inorder means print the left node first , then current node and finally right node. 
     * 2. This makes the calling recursive fn changed its order like below
     * 3. As usual, we will pass the root of tree and return the results array after all the recursive call
     */
    DFSInorder() {
        let results = [];
        function traverse(currentNode) {
            if(currentNode.left) traverse(currentNode.left);
            results.push(currentNode);
            if(currentNode.right) traverse(currentNode.right);
        }

        traverse(this.root);
        return results;
    }

    print() {
        let bfsTraversal = this.BFS();
        bfsTraversal.forEach(element => {
            console.log(element + " -> ");
        });
    }
}

let bst = new BST();

bst.insert(43);
bst.insert(54);
bst.insert(32);
bst.insert(25);
bst.insert(99);


bst.print();
