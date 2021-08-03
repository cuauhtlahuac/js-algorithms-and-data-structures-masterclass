function createRandomArray(length){
  return Array.apply(null, {length}).map(Function.call, Math.random);
}

const largeArray = createRandomArray(20000);

console.log({largeArray});

module.exports = {createRandomArray, largeArray};
