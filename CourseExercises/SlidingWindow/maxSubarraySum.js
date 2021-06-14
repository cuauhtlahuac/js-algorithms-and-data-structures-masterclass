/*
  Write a function called maxSubarraySum which accepts an array of integers and a number called n.
  The function should calculate the maximum sum of n consecutive elements in the array.
  Each sum most be the number next to other.
*/

function maxSubarraySum(arr, num) {
  if ( num > arr.length){
    return null;
  }

  let max = arr[0];
  // Add the firsts numbers
  for (let j = 1; j < num; j++) {
    const element = arr[j];
    max += element;
  }
  
  let temp = max;

  for (let i = num; i < arr.length; i ++){
                  // subtract first / add last
    temp = (temp - arr[i - num]) + arr[i];
    max = Math.max(max, temp)
  }
  console.log(max);
  return max;
}

maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([-100, 4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null