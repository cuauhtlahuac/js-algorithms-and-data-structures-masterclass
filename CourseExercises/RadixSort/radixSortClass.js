class RadixSort {
	constructor(integer) {
		this.integer = integer;
		this.numberToString = this.integer + '';
	}
	getDigitPositionStringMethod(position) {
		return parseInt(
			this.numberToString.charAt(this.numberToString.length - position - 1),
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
	countDigits(){
		return this.numberToString.length
	}
}

module.exports = RadixSort;
