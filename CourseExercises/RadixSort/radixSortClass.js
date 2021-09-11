class RadixSort {
	constructor(list = []) {
		this.list = list;
		this.numberToString = '';
		this.maxDigitNumber = 0;
	}

	getDigitPositionStringMethod(num, position) {
		this.numberToString = convertNumberToString(num)
		return parseInt(
			this.numberToString.charAt(this.numberToString.length - position - 1),
			10,
		);
	}

	getDigitPositionReminderMethod(int, position) {
		if (typeof int === 'bigint' || isNaN(int))
			throw new Error(
				'Please, pass a number or a number with less than 2⁵³ digits',
			);
		return Math.floor((int / Math.pow(10, position)) % 10);
	}

	getDigitPositionTeacherMethod(int,i) {
		return (
			Math.floor(
				Math.abs(int) / Math.pow(10, i), // this es for negative numbers case, doesn't matter the position will be the same // it is equal to for example pow(10, 3) = 1000, pow(2,5)= 32
			) % 10
		);
	}

	convertNumberToString(num){
		return num + ''
	}

	countDigits(num) {
		return this.convertNumberToString(num).length;
	}

	mostDigitNumbers() {
		let maxDigits = 0;

		for (let i = 0; i < this.list.length; i++) {
			maxDigits = Math.max(maxDigits, this.countDigits(this.list[i]))
		}
		this.maxDigitNumber = maxDigits;
		return maxDigits;
	}
}

module.exports = RadixSort;
