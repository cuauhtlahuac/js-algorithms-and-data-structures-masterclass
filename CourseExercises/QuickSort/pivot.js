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
// Loop through the array from the start until the end
  for(var i = start + 1; i < arr.length; i++){
    // If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
    if(pivot > arr[i]){
      swapIdx++;
      swap(arr,swapIdx,i);
    }
  }
  // Swap the starting element (i.e. the pivot) with the pivot index
  swap(arr,start,swapIdx);
  // Return the pivot index
  return swapIdx;
}

console.log(pivot([4,8,2,1,5,7,6,3]))
