/**
 * https://leetcode.com/problems/find-the-difference-of-two-arrays/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 * 
 * Time: O(N)
 */
var findDifference = function(nums1, nums2) {
    // const ans1 = nums1.filter(x => !nums2.includes(x));
    // const ans2 = nums2.filter(x => !nums1.includes(x));
    // return [Array.from(new Set(ans1)), Array.from(new Set(ans2))];

    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    for(let item of set1) {
        if(set2.has(item)){
            set1.delete(item);
            set2.delete(item);
        }
    }

    return [Array.from(set1), Array.from(set2)];
};

const nums1 = [1,2,3,3], nums2 = [1,1,2,2];
console.log(findDifference(nums1, nums2));