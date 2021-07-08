/**
 * THE POWER OF MEMOIZATION
 * 
 */

class CheckTime {
	constructor(date) {
		this.currentTime = date;
    this.timer = this.timer.bind(this)
	}

	timer(func) {
		const result = func;
    console.log("Result = ", result);

    let newTime = new Date()

    let diff = (newTime - this.currentTime) / 1000;
    this.currentTime = newTime;
    console.log('executes in: ', diff, 'seconds');
	}
}

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

