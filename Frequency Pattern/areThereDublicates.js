/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  
 * You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 * Restrictions:

    Time - O(n)

    Space - O(n)

    Bonus:

    Time - O(n log n)

    Space - O(1)
 */

/*
function areThereDuplicates() {
    // good luck. (supply any arguments you deem necessary.)
    let lookup = {};
    for(let i = 0; i < arguments.length; i++) {
        lookup[arguments[i]] = (lookup[arguments[i]] || 0) + 1;
    }
    for(let key in lookup) {
        if(lookup[key] > 1)
            return true;

    }
    return false;
  }
  */

  function areThereDuplicates(...args) {
    // good luck. (supply any arguments you deem necessary.)
    args.sort((a,b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });

    let start = 0, next = 1;
    while(next < args.length) {
        if(args[start] === args[next]){
            return true;
        }
        start++;
        next++;
    }
    return false;
  }

  function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
  }
  

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
