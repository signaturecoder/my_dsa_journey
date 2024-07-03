/**
 * 
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/?envType=daily-question&envId=2024-07-02
 * 
 * Approach: 1
 *  a. Calculate the occurance of each element in array1
 *  b. Traverse the array2 and check if element present in lookup as well as their count is > 0 then 
 *         a. decrement the count of occurance in the lookup
 *         b. push the item in result array
 * 
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]} an array which consists of common element present in both array along with their frequency
 */

/*
var intersect = function(nums1, nums2) {
    const lookup = {};
    for(let c of nums1){
        lookup[c] = (lookup[c] || 0) + 1;
    }

    let result = [];
    for(let n of nums2){
        if(n in lookup && lookup[n] > 0){
            lookup[n]--;
            result.push(n);
        }
    }
    return result;    
};

var intersect = function(nums1, nums2) {
    const map = new Map();
    const result = [];
    for(const num of nums1){
        if(map.has(num)){
            map.set(num, map.get(num)+1);
            continue;
        }
        map.set(num, 1);
    }
    for(const num of nums2){
        if(map.get(num) > 0){
            map.set(num, map.get(num)-1);
            result.push(num);
        }
    }
    return result;    
};
*/


// arrays are sorted: Time : O(nlog(n))
var intersect = function(nums1, nums2) {
    nums1.sort((a,b) => a - b);
    nums2.sort((a,b) => a - b);
    let result = [], i = 0, j = 0;
    while(i < nums1.length && j < nums2.length) {
        if(nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++;
        } else if(nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return result;
};

// const nums1 = [1,2,2,1], nums2 = [2,2]; // [2, 2]
const nums1 = [4,9,5], nums2 = [9,4,9,8,4]; // [9,4]
console.log(intersect(nums1, nums2));