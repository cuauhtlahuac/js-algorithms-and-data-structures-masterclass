function insertionSort(array) {
	for (let i = 1; i < array.length; i++) {
		let currentElement = array[i];
		// * Here we using var but is not a good practice
		for (var j = i - 1; j >= 0 && array[j] > currentElement; j--) {
			if (array[j] > currentElement) {
        array[j + 1] = array[j];
			}
		}

		array[j + 1] = currentElement;
	}
	return array;
}


console.log(insertionSort([ 6, 5, 3, 4, 1, 2 ]));
console.log(insertionSort([ 43, 56, 23, 1, 10, 89, 88, 90, 99, 652 ]));

function insertionSortWithLet(array) {
  /* 
  *  Here we substitute var keyword for let
  * but requires more effort
  */

	for (let i = 1; i < array.length; i++) {
		let currentElement = array[i];
    let finalIndex = i;
		for (var j = finalIndex - 1; j >= 0 && array[j] > currentElement; j--) {
      if (array[j] > currentElement) {
        array[j + 1] = array[j];
			}
      finalIndex = j;
		}
		array[finalIndex] = currentElement;
	}
	return array;
}

console.log(insertionSortWithLet([ 6, 5, 3, 4, 1, 2 ]));
console.log(insertionSortWithLet([ 43, 56, 23, 1, 10, 89, 88, 90, 99, 652 ]));
