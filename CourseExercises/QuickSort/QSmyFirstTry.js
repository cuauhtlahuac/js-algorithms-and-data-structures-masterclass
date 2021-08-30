const pivot = require('./pivot')


function myQuickSort(arr){
  // Call the pivot on the array and move to the correct spot
  let pivotIndex = pivot(arr);
  // Then we gonna call quick sort again on the left side and right side


  // Logica Aproximada: When the helper (The previous function created before) returns to you the updated pivot index,
  // Recursively call the pivot helper on the subarray* to the left of that index, and the subarray to the right of that index.
  // !Its happening in the same array, we only look in some portion of the array, we don't add or remove elements 

}

const initialArray = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]

myQuickSort(initialArray)