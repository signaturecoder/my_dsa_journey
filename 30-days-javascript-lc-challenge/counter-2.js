/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let initialCount = init;
    return {
        increment: () => {
            return ++initialCount;
        },
        reset: () => {
            initialCount = init;
            return init;
        }, 
        decrement: () => {
            return --initialCount;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4