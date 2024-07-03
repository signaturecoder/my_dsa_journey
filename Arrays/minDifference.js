/**
 * https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/?envType=daily-question&envId=2024-07-03
 * 
 * Asked in GOOGLE, FACEBOOK
 * 
 * @param {number[]} nums
 * @return {number}
 * 
 * Approach: Applying Greedy Algorithm and sorting to find the optimal solution here
 * Here, 
 * 
 * // sort: 2,3,4,5
 * 
 * There are 4 possible senarios which can decrease the difference between minimum and maximum
 * a. 
 * 
 * Instead of Infinity, we can take Number.MAX_VALUE
 */
var minDifference = function(nums) {
    let minDiff = Infinity, n = nums.length;
    if(n <= 4) return 0;
    nums.sort((a, b) => a - b);
    for(let i = 1; i <= 4; i++) {
        minDiff = Math.min(minDiff, Math.abs(nums[n-i] - nums[4-i]));
    }
    return minDiff;
};

/**
 * 
 * Core Logic
 * var minDifference = function(nums) {
    if(nums.length<=4) return 0;
    let size=nums.length
    nums=nums.sort((a,b)=>a-b)
    let val1=nums[size-4] - nums[0]
    let val2=nums[size-3] - nums[1]
    let val3=nums[size-2] - nums[2]
    let val4=nums[size-1] - nums[3]
    return Math.min(val1,val2,val3,val4)
};
 */

// const nums = [5,3,2,4];
const nums = [1,5,0,10,14];
console.log(minDifference(nums));