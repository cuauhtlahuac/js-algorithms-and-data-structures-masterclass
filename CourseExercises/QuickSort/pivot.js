// It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
function pivot(arr, start=0, end=arr.length+1){
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
// Grab the pivot from the start of the array
  var pivot = arr[start];
  // Store the current pivot index in a variable (this will keep track of where the pivot should end up)
  var swapIdx = start;
// Loop through the array from the first element, after pivot (start + 1), until the end
  for(var i = start + 1; i < arr.length; i++){
    // If the pivot is greater than the current element (witch is as we said before the next element after pivot),
    // increment the pivot index variable and then swap the current element with the element at the pivot index
    if(pivot > arr[i]){
      // next line say that at least one element is less than the pivot and now we can keep track of how many elements are less than pivot
      swapIdx++;
      // Here we need to swap the element 
      swap(arr,swapIdx,i);
    }
  }
  // Swap the starting element (i.e. the pivot) with the pivot index
  // This means that at the final we swap the current swapIdx with the pivot, because the value "start" never changed
  swap(arr,start,swapIdx);
  console.log({arr});
  // Return the pivot index
  return swapIdx;
}

// Version with ES2015 Syntax
function pivotES2015(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}



module.exports = pivot;