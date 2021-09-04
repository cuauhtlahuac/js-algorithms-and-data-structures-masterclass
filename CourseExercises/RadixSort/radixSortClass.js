class RadixSort {
  constructor(integer){
    this.integer = integer;
    console.log(integer);
  }
  getDigitPositionStringMethod(position) {
    const numberToString = this.integer + '';
    return numberToString.charAt(numberToString.length - position - 1);
  }
}

module.exports = RadixSort;
