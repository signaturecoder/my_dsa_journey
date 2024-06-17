/**
 * 
 * The function should take in a sorted array of integers and a target integer to find. 
 * It returns the index of the target element or -1, if the target element doesn't exist in the array.
 * 
 * What is Binary Search?
 * - Binary search is an efficient algorithm for finding a target value within a sorted array. 
 * It works by repeatedly dividing the search interval in half.
 * 
 * https://leetcode.com/problems/binary-search/solutions/423162/binary-search-101/
 */

function binarySearch(arr, target) {
    let start = 0, end = arr.length - 1;
    let mid;
    while(start <= end) {
        mid = start + Math.floor((end - start)/2);

        if(arr[mid] === target)
            return mid;


        if(arr[mid] < target) {
            start = mid + 1; 
        } else {
            end = mid - 1;
        }
    }

    return -1;
  
}

console.log(binarySearch([1, 2, 3, 6, 9, 11], 6)); // 3
console.log(binarySearch([1, 2, 3, 12, 14, 16], 5)); // -1
