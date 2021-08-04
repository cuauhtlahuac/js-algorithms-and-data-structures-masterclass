function createRandomArray(length){
  return Array.apply(null, {length}).map(Function.call, Math.random);
}

const largeArray = createRandomArray(100000);

console.log({largeArray});

module.exports = {createRandomArray, largeArray};
