const Radix = require('./radixSortClass');

const bigInteger = 89878977897;
const radix = new Radix(bigInteger);

console.log(radix.getDigitPositionStringMethod(0));
console.log(radix.getDigitReminderMethod(0));
