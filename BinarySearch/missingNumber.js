/**
 * https://leetcode.com/problems/missing-number/description/
 */

/*
Time: O(nlog n)
Space: O(1)

var missingNumber = function(nums) {
    // sort in place having time complexity of O(log n)
    nums.sort((a, b) => a - b);

    for(let i = 0; i <= nums.length; i++) {
        if(nums[i] !== i){
            return i;
        }
    }

};

*/

/*
Time: O(n)
Space: O(n)

var missingNumber = function(nums) {

    let lookup ={};
    for(let i = 0; i < nums.length; i++) {
        lookup[nums[i]] = (lookup[nums[i]] || 0) + 1;
     }

    for(let i = 0; i <= nums.length; i++) {
        if(!(i in lookup)){
            return i;
        }
    }

};

*/

// Optimal Approach 1:  Time: O(N) Space: O(1)

var missingNumber = function(nums) {

    const n = nums.length;
    const summation = (n*(n+1))/2;
    console.log(summation);

    let sum = 0;
    for(let i = 0;i < n; i++){
        sum+= nums[i];
    }

    const missing = summation - sum;
    return missing;

};


// Optimal Approach 2: Using XOR



const nums = [3,0,1];
const nums1 = [9,6,4,2,3,5,7,0,1]
console.log(missingNumber(nums1));