function mergingArrays(arr1 = [], arr2 = []) {
  // Create an empty array, take a look at the smallest values in each input array
  let array = [];
  let i = 0;
  let j = 0;
  // While there are still values we haven't looked at...
  while (0 < arr1.length && 0 < arr2.length) {
    // If the value in the first array is smaller than the value in the second array,
    if(arr1[i] < arr2[j]){
      //  push the value in the first array into our results and move on to the next value in the first array
      array.push(arr1.shift());
    }

    // If the value in the first array is larger than the value in the second array,
    if(arr1[i] > arr2[j]){
      // push the value in the second array into our results and move on to the next value in the second array
      array.push(arr2.shift());
    }
  }
  // Once we exhaust one array, push in all remaining values from the other array
  array.push(...arr1, ...arr2)
  return array;
}

console.log(mergingArrays([2,4,6,9], [1,3,5,7]));

module.exports = mergingArrays;


