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

module.exports = CheckTime;