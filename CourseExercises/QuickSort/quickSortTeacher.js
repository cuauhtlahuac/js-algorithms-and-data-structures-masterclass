const pivot = require('./pivot')

// The first time we gonna call the entire array
// Then after make the pivot we gonna have a new order in the array
function myQuickSort(arr, left = 0, right = arr.length - 1){
  // STOPPER (Base case)
  if(left < right){
  // Call the pivot on the array and move to the correct spot
  let pivotIndex = pivot(arr, left, right); 
  // Then we gonna call quick sort again on the left side and right side
  // (!Important thing: check the right place of each left and right parameter in functions)
    // left
  myQuickSort(arr, left, pivotIndex -1);

    // right
  myQuickSort(arr, pivotIndex  + 1, right);

  // Logica Aproximada: When the helper (The previous function created before) returns to you the updated pivot index,
  // Recursively call the pivot helper on the subarray* to the left of that index, and the subarray to the right of that index.
  // !Its happening in the same array, we only look in some portion of the array, we don't add or remove elements 
  }
  // We need to return at the final something, in this cas is the array
     return arr;
}

const initialArray = [3,44,38,5,-4,47,15,36,26,27,2,46,4,19,50,48]

console.log(myQuickSort(initialArray))