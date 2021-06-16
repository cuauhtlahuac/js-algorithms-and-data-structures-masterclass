// works with a sorted array
function search(array, val) {
 
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
      let middle = Math.floor((min + max) / 2);

      if (array[middle] < val) {
          min = middle + 1;
      }
      else if (array[middle] > val) {
          max = middle - 1;
      }
      else {
          return middle;
      }
  }

  return -1;
}

// all are sorted arrays
search([1,2,3,4,5,6],4) // 3
search([1,2,3,4,5,6],6) // 5
search([1,2,3,4,5,6],11) // -1