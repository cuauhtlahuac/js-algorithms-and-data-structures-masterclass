var CheckTime = require('../utils/timer');

function fib(n) {
	if (n <= 2) return 1;
	return fib(n - 1) + fib(n - 2);
}

const { timer } = new CheckTime(new Date());

timer(fib(5)); // 5
timer(fib(12)); // 144
timer(fib(24)); // 46368
timer(fib(25)); // 75025
timer(fib(40)); // 102334155
timer(fib(41)); // 165580141
timer(fib(42)); // 267914296
timer(fib(43)); // 433494437 * Spend a lot of time to complete

