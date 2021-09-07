class RadixSort {
	constructor(integer) {
		this.integer = integer;
		console.log(integer);
	}
	getDigitPositionStringMethod(position) {
		const numberToString = this.integer + '';
		return parseInt(
			numberToString.charAt(numberToString.length - position - 1),
			10,
		);
	}
	getDigitReminderMethod(position) {
		if (typeof this.integer === 'bigint' || isNaN(this.integer))
			throw new Error(
				'Please, pass a number or a number with less than 2⁵³ digits',
			);
		return Math.floor((this.integer / Math.pow(10, position)) % 10);
	}
	getDigitTeacherMethod(i) {
		return (
			Math.floor(
				Math.abs(this.integer) // this es for negative numbers case, doesn't matter the position will be the same
        / Math.pow(10, i), // it is equal to for example pow(10, 3) = 1000, pow(2,5)= 32
			) % 10
		);
	}
}

module.exports = RadixSort;
