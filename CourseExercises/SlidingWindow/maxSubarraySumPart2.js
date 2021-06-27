/*
Given an array of integers and a number, write a function called maxSubarraySum,
which finds the maximum sum of a subarray with the length of the number passed to the function.
*/

function maxSubarraySum(arr, num) {
	if (arr.length < num) return null;

	let maxSum = arr[0];

  for (let index = 1; index < num; index++) {
    const element = arr[index];
    maxSum += element;
  }
  
  let tempSum = maxSum;

	for (let index = num; index < arr.length; index++) {

    tempSum = tempSum - arr[index - num] + arr[index];
    maxSum = Math.max(maxSum, tempSum);
	}
	
  console.log("Max Sum", maxSum);
	return maxSum;
}

maxSubarraySum([ 100, 200, 300, 400 ], 2); // 700
maxSubarraySum([ 1, 4, 2, 10, 23, 3, 1, 0, 20 ], 4); // 39
maxSubarraySum([ -3, 4, 0, -2, 6, -1 ], 2); // 5
maxSubarraySum([ 3, -2, 7, -4, 1, -1, 4, -2, 1 ], 2); // 5
console.log(maxSubarraySum([ 2, 3 ], 3)); // null
