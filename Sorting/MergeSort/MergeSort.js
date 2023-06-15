function merge(array1, array2) {
    let combined = [];
    let i = 0;
    let j = 0;
    
    while(i < array1.length && j < array2.length) {
        if(array1[i] < array2[j]) {
            combined.push(array1[i]);
            i++;
        } else {
            combined.push(array2[j]);
            j++;
        }
    }
    
    while(i < array1.length) {
        combined.push(array1[i]);
        i++;
    }
    
    while(j < array2.length) {
        combined.push(array2[j]);
        j++;
    }
    
    return combined;
}



let myArray1 = [1,3,7,8];
let myArray2 = [2,4,5,6];
console.log( merge( myArray1, myArray2 ) );


/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6, 7, 8 ]

*/  


function mergeSort(array) {
    if(array.length === 1) return array;
    
    let mid = Math.floor(array.length/2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);
    
    return merge(mergeSort(left), mergeSort(right));
}



let originalArray = [3,1,4,2];
let sortedArray = mergeSort( originalArray );

console.log( "Original Array:", originalArray );
console.log( "\nSorted Array:", sortedArray );


/*
    EXPECTED OUTPUT:
    ----------------
    Original Array: [ 3, 1, 4, 2 ]

    Sorted Array: [ 1, 2, 3, 4 ]

*/  

//Time Complexity: O (n logn n) -- breaking array into two parts (log n) and then looping over all the items O(n)
// Space Complexity: O(n)