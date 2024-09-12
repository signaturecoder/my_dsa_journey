/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let result = []
    for(let i = 0; i < arr.length; i++) {
        const sol = fn.call(arr[i], i);
        console.log("Sol ", sol);
        result.push(fn.call(arr[i], i));
    }
    return result;
};

const arr = [1,2,3], fn = function plusone(n) { return n + 1; }
console.log(fn);
console.log(map(arr, fn));