/**
 * https://leetcode.com/problems/two-sum/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // let lookup = {};
    // for(let i = 0; i < nums.length; i++) {
    //     const missing = target - nums[i];
    //     if(!(missing in lookup)) {
    //         lookup[nums[i]] = i;
    //     } else {
    //         return [lookup[missing], i];
    //     }
    // }

    // Use map for better performance
    let mp = new Map();

    for(let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];
        if(mp.has(difference)) {
            return [mp.get(difference), i];
        }

        mp.set(nums[i], i);
    }
};

const nums = [3,3], target = 6
console.log(twoSum(nums, target));