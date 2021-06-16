function search(array, value){
  let index = -1;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element === value){
      index = i;
    }
  }

  console.log(index)
  return index;
}


// all are sorted arrays
search([1,2,3,4,5,6],4) // 3
search([1,2,3,4,5,6],6) // 5
search([1,2,3,4,5,6],11) // -1