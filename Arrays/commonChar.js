/**
 * 
 * https://leetcode.com/problems/find-common-characters/
 * @param {string[]} words
 * @return {string[]}
 */

var intersect = function(nums1, nums2) {
    console.log(nums2);
    const arr1 = [...nums1], arr2 = [...nums2];
    const map = new Map();
    const result = [];
    for(const num of arr1){
        if(map.has(num)){
            map.set(num, map.get(num)+1);
            continue;
        }
        map.set(num, 1);
    }
    for(const num of arr2){
        if(map.get(num) > 0){
            map.set(num, map.get(num)-1);
            result.push(num);
        }
    }
    return result;    
};

var commonChars = function(words) {
    // for(let i = 0; i < words.length; i++) {
        const result = intersect(words[0], words[1]);
        console.log(result);
    // }
};

const words = ["bella","label","roller"];
// const words = ["cool","lock","cook"];

console.log(commonChars(words));