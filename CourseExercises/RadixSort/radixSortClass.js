class RadixSort {
  constructor(integer){
    this.integer = integer;
    console.log(integer);
  }
  getDigitPositionStringMethod(position) {
    const numberToString = this.integer + '';
    return parseInt(numberToString.charAt(numberToString.length - position - 1), 10);
  }
  getDigitReminderMethod(position){
    if(typeof this.integer === 'bigint'  || isNaN(this.integer)) throw new Error("Please, pass a number or a number with less than 2⁵³ digits")
    return Math.floor((this.integer / Math.pow(10, position)) % 10);
  }
}

module.exports = RadixSort;
