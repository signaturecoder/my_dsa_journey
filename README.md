# Data Structure and Algorithms

This repository consists of common **Data Structures** and **Algorithms** asked in regular interviews.

## Big O Notation

Big O Notation is a way to measure how well a computer algorithm scales as the number of data increases.

- We use Big O Notation to classify algorithms by how they respond to changes in the input size, so algorithms with the same growth rate are represented with the same Big O Notation. The letter **O** is used because the rate of growth of a function is also called **order of the function**.

- Time Complexity - Time Complexity of an algorithm signifies the total time taken by the program to run till its completion. It is mostly expressed using the big O notation.

1. A constant operation O(1) `const total = people.length;`
2. A Linear operation O(n) `const names = people.map(({ name }) => name);`
3. A Quadratic operation O(n^2)

```
const peopleWithSameAge = people.filter
(
 ({ age }) =>   
   people.filter(person => person.age == age)
   .length > 1
);
```

4. A Logarithm notation or O(log(n)), this is very common in divide and conquer algorithms type (binary search)

```
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
```

5. Constants don't matter

```
O(2n) --> O(n)
O(500) --> O(1)
O(13n ^ 2) --> O(n ^ 2) n square
```

6. Big O Shorthands
```
a. Arithmetic operations are constant
b. Variable assignment is constant
c. Accessing elements in an array (by index) or object (by key) is constant
d. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop
```

## Space Complexity

- Space Complexity - The memory require by the algorithm to run. It is a measure of the amount of working storage an algorithm needs.

```
a. Auxilary Space - It is a temp space used by algorithm for execution, not including space taken up by the inputs.
b. Input Space - The space needed during execution considering the size of the input.
```

3 Rules of Thumb

```
a. Most primitive (booleans, numbers, undefined, null) are constant space.
b. Strings require O(n) space (where n is the string length)
c. Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)
``` 

## Logarithms

- In mathematics, the logarithm is the inverse function to exponentiation. A logarithm is the power to which a number must be raised in order to get some other number.

- Searching algorithms have logrithmic time complexity, sorting algorithms involve logrithms and recursion somtimes involves logrithmic space complexity

```
Example: How many 2s do we multiply to get 8?
Answer: 2 × 2 × 2 = 8, so we had to multiply 3 of the 2s to get 8
So the logarithm is 3

The number we multiply is called the "base", so we can say:

"the logarithm of 8 with base 2 is 3"
or "log base 2 of 8 is 3"
or "the base-2 log of 8 is 3"

Example: What is log5(625) ...?
5 × 5 × 5 × 5 = 625, so we need 4 of the 5s
Answer: log5(625) = 4
```

```
a. O(log n) --> Good
b. O(nlog n) --> Slightly Better than O(n^2)

```
![Time Complexity Graph](assets/complexity.png)

## Objects
- Un-ordered key value pairs
- Fast access/removal and insertion

```
const instructor = {
  firstName: "Sanu",
  isInstructor: true,
  favoriteNum: [1,2,3,4]
}

```

```
BigO:

Insertion - O(1)
Removal - O(1)
Searching - O(N)
Access - O(1)

Object Methods:

Object.keys - O(N)
Object.values - O(N)
Object.entries - O(N)
Object.hasOwnProperty - O(1)
```

```
Object.keys(instructor) // ['firstName', 'isInstructor', 'favoriteNum']

```
So an no. of keys grow, no. of elements in the array grows.


## Arrays
- Ordered List
- Fast access/removal (sort of..)

```
BigO:

Insertion - It depends..
Removal - It depends..
Searching - O(N)
Access - O(1)

push - O(1)
pop - O(1)
shift - O(N)
unshift - O(N)
concat - O(N)
slice - O(N)
splice - O(N)
sort - O(N * logN)
filter/forEach/map/reduce etc.. - O(N)
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)