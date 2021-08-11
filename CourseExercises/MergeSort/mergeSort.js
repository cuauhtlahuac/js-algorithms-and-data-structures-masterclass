function mergeSort(array) {

// * Break up the array into halves until you have arrays that are empty or have one element
  function breakArrayHelper(array){
    const copiedArrayFirst = array.slice(0, array.length / 2) 
    const copiedArraySecond = array.slice(array.length / 2, array.length) 

    console.log({copiedArrayFirst, copiedArraySecond});
    function breakRecursive(copiedArray){


      return breakRecursive()
    }

  }
  breakArrayHelper(array)
// * Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// * Once the array has been merged back together, return the merged (and sorted!) array

}


mergeSort([1,2,3,5,6,4,91,54]);