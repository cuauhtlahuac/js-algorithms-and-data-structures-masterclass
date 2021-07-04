/**
 * Write a function;<strong>factorial</strong> which accepts a number and returns the factorial of that number.
 * A factorial is the product of an integer and all the integers below it;
 * e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.
 * factorial zero (0!) is always 1.
 */

 function factorial(n, prevValues = []) {
	if (prevValues[n] != null) return prevValues[n];

	let result;

	if (n < 2) {
		result = 1;
	} else {
		result = n * factorial(n - 1);
	}

	prevValues[n] = result;
	return result;
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
console.log(factorial(14)); // 87178291200
