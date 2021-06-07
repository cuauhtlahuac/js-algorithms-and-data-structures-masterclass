/*
sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined
*/

sortedArrayOfNumbers = [ -3, -2, -1, 0, 1, 2, 3 ];

function sumZero(sortedArrayOfNumbers) {
  // create two temporary variables
  let numOne;
  let numTwo;
  const len = sortedArrayOfNumbers.length;
  let finalElement;

  for (let i = 0; i < len; i++) {
    const element = sortedArrayOfNumbers[i];
    finalElement = sortedArrayOfNumbers[len-1];

    if((element + finalElement) === 0){

      return [element, finalElement]
    }

    if (element === 0) {
      return undefined
    }
  }
    
  return undefined;
}

console.log(sumZero(sortedArrayOfNumbers));
console.log(sumZero([-2,0,1,3]));