function insertionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let currentElement = i;
    // * Start by picking the second element in the array
  for (let j = i+1; j > 0 ; j--) {
    // * Now compare the second element with the one before it and swap if necessary.
    if(array[j] < array[currentElement]){
      let temp = array[j];
      array[j] = array[currentElement];
      array[currentElement] = temp;
    }
    // * Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
    currentElement--;
  }
}

// Repeat until the array is sorted.
return array;
}

console.log(insertionSort([ 6,5,3,4,1,2]));
console.log(insertionSort([ 43, 56, 23, 1, 10, 89, 88, 90, 99, 652]));