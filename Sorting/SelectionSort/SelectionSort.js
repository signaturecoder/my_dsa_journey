function selectionSort(array) {
    let min;
    for(let i = 0; i < array.length - 1; i++) {
        min = i;
        for(let j = i + 1; j < array.length; j++) {
            if(array[min] > array[j]){
                min = j;
            }
        }
        if(i !== min) {
            let temp = array[min];
            array[min] = array[i];
            array[i] = temp;
        }
    }

    return array;
}

let myArray = [4,2,6,5,1,3];
selectionSort(myArray);
console.log(myArray);
