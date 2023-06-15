
function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

function bubbleSort(array) {
    for(let i =0; i < array.length - 1; i++) {
        for(let j = i+1; j < array.length; j++) {
            if(array[j] < array[i]){
                swap(array, i, j);
            }
        }
    }
    return array;
}








let myArray = [4,2,6,5,1,3];
bubbleSort(myArray);
console.log(myArray);
