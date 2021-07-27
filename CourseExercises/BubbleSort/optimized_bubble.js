// Optimized BubbleSort with noSwaps

/**
 * This version is better in arrays that are almost sorted
 */
function bubbleSort(arr){
  var noSwaps;
  for(var i = arr.length; i > 0; i--){
    // we assume that we don't gonna have to swap
    noSwaps = true;
    for(var j = 0; j < i - 1; j++){
      // here we gonna take all the possibles swaps,
      // but if it has any then it won't be braked, only until there's not more swaps to do
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        // if we do a swap then...
        noSwaps = false;    
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);