function collectOddValues(arr) {
	let newArr = [];

	if (arr.length === 0) {
		return newArr;
	}

	if (arr[0] % 2 !== 0) {
		newArr.push(arr[0]);
	}
	// The concat() method is used to merge two or more arrays.
	// This method does not change the existing arrays, but instead returns a new array.
	newArr = newArr.concat(collectOddValues(arr.slice(1))); // slice to cut the first element: [2,3,4,5]
	return newArr;
}

console.log(collectOddValues([ 1, 2, 3, 4, 5 ]));
/**
 * collectOddValues([1,2,3,4,5])}
 * ... 1 is odd so the element is gonna safe into the newArr variable
 * [1].concat(collectOddValues([2,3,4,5]))
 * 				... 2 is not odd so the function do nothing
 * 							[].concat(collectOddValues([3,4,5])
 * 												[3].concat(collectOddValues([4,5])) 															
 * 																	 [].concat(collectOddValues([5])
 * 																						[5].concat(collectOddValues([])
 * 																													[] finally return the empty array
 * 
 */