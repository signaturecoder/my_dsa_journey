/**
@param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        console.log(key);
        if(cache.has(typeof key)){
            // fetch from cache
            return cache.get(key);
        }

        // calculate if result is not stored in cache
        const result = fn(...args);
        cache.set(key, result);
        return result;
    }
}



let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
  return a + b;
})
console.log(memoizedFn(2, 3)) // 5
console.log(memoizedFn(2, 3)) // 5
console.log(callCount) // 1 
