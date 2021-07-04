/**
 * Write a function called power which accepts a base and an exponent.
 * The function should return the power of the base to the exponent.
 * This function should mimic the functionality of Math.pow();
 * - do not worry about negative bases and exponents.
 */

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

const power = (base, exponent) => {
  if(exponent === 0) return 1;  
  const powerHelper = (base) => {
    if(exponent < 2) return base;
    exponent--;

    return base * powerHelper(base)
  }

  return powerHelper(base);
}

console.log(power(2,0));
console.log(power(7,2));
console.log(power(2,10));
console.log(power(4, 0.5));
