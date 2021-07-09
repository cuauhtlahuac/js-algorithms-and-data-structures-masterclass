/**
 * THE POWER OF MEMOIZATION
 * 
 */

var CheckTime = require('../utils/timer');

function fib(n, prevValue = []) {
	if (n <= 2) return 1;
	
	if(prevValue[n] != null ) return prevValue[n];

	let result;

	result = fib(n - 1, prevValue) + fib(n - 2, prevValue);

	prevValue[n] = result;

	return result;
}

const { timer } = new CheckTime(new Date());

timer(fib(5)); // 5
timer(fib(12)); // 144
timer(fib(240)); // 6.420201486372308e+49
timer(fib(250)); // 7.896325826131728e+51
timer(fib(500)); // 1.394232245616977e+104
timer(fib(5000)); // Infinity
timer(fib(6000)); // Infinity
timer(fib(7000)); // Infinity

