/**
 * https://leetcode.com/problems/merge-nodes-in-between-zeros/?envType=daily-question&envId=2024-07-04
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * Constraint:
 *  a. Beginning and end of the list should contain node.val = 0
 *  b. There will be no two consecutive nodes having value = 0
 * 
 * Task:
 *  For every two consecutive nodes, you need to merge all the node in between them into a single 
 *  whose value is sum of all the node.
 * 
 * Explanation:
 *  0 -> 3 -> 1 -> 0 -> 4 -> 5 -> 2 -> 0
 * // o/p: 
 *         step 1: 3+1 = 4
 *         step 2: 4+5+2 = 11
 * 
 *  so new linked list: 4 -> 11
 * 
 */
var mergeNodes = function(head) {
    
};

const head1 = [0,3,1,0,4,5,2,0];
const head2 = [0,1,0,3,0,2,2,0]; 
console.log(mergeNodes(head1)); //[4,11]
console.log(mergeNodes(head2)); //[1,3,4]
