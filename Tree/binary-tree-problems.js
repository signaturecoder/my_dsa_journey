const treeIncludes = (root, target) => {
    
    if(root === null) return false;
    
    let queue = [];
    
    queue.push(root);
    
    while(queue.length) {
      let currentNode = queue.shift();
      if(currentNode.val === target){
        return true;
      }
      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
      
    }

    return false;
  };


 // basically we will returning the logical OR of both children 
  const treeIncludesUsingDFS = (root, target) => {
    
      if(root === null) return false; // corner case
      if(root.val === target) return true;

       return treeIncludes(root.left) || treeIncludes(root.right);
    
  };

  /**
   * Write a function, treeSum, that takes in the root of a binary tree that contains number values. 
   * The function should return the total sum of all values in the tree.
   *        3
    //    /    \
    //   11     4
    //  / \      \
    // 4   -2     1

    treeSum(a); // -> 21
   */

  const treeSum = (root) => {
    // todo
    let sum = 0;
    if(root === null) return sum;
    
    let queue = [root];
    
    while(queue.length > 0) {
      const currentNode = queue.shift();
      sum += currentNode.val;
      
      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
    }
    
    return sum;
  };


  // Time: O(N^2) because queue.shift() will have O(N) and we visit each node so complexity becomes N^2 
  const treeMinValue = (root) => {
    
    let min = Number.MAX_VALUE;
    let queue = [root];
   
    while(queue.length > 0) {
      const currentNode = queue.shift();
      if(min > currentNode.val){
        min = currentNode.val;
      }
      
      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
    }
    
    return min;
  };

  // iterative solution for DFS using stack
  const treeMinValueUsingDFS = (root) => {
    
    let min = Number.MAX_VALUE;
    let stack = [root];
    while(stack.length > 0) {
      const currentNode = stack.pop();
      if(min > currentNode.val){
        min = currentNode.val;
      }
      
      if(currentNode.left) stack.push(currentNode.left);
      if(currentNode.right) stack.push(currentNode.right);
    }
    
    return min;
  };
// recursive solution
  const treeMinValueUsingDFSS = (root) => {
    
    let min = Number.MAX_VALUE;
    if(root === null) return min;

    const minLeft = treeMinValueUsingDFSS(root.left);
    const minRight = treeMinValueUsingDFSS(root.right);
    return Math.min(root.val, minLeft, minRight);
  };



const maxPathSum = () => {
    if(root === null) return -Infinity;
    if(root.left === null && root.right === null) return root.val;
    const maxPathSumChildren = Math.max(maxPathSum(root.left), maxPathSum(root.right))
    return root.val + maxPathSumChildren;
}


//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

// DFS using recurssion

const DFS = (root) => {
    if(root === null) return [];

    const leftValues = DFS(root.left);  // [11,4,-2]
    const rightValues = DFS(root.right); // [4,1]

    return [root.val, ...leftValues, ...rightValues];


}
