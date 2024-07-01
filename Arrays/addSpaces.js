/**
 * 
 * https://leetcode.com/problems/adding-spaces-to-a-string/
 * 
 * Approach: To break the array at that particular index
 *     1. Iterate over the 2nd array and 
 *          a. create a substring of index 0 to spaces[j] and 
 *          b. push into an array
 *          c. Update the index with spaces[j]
 *     2. Return the array with inserting ' ' in the elements of array
 * 
 * Time: O(N)
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let result = [];
    let currentStr = s.split('');
    let i = 0;
    for(let j = 0; j <= spaces.length; j++) {
        result.push(currentStr.slice(i, spaces[j]).join(''));
        i = spaces[j];
    }
    return result.join(' ');
};

const s1 = "LeetcodeHelpsMeLearn", spaces1 = [8,13,15];
const s2 = "icodeinpython", spaces2 = [1,5,7,9];

console.log("s1", addSpaces(s1, spaces1));
console.log("s2", addSpaces(s2, spaces2));
