function search(arr, val){
  for(let i = 0; i < arr.length; i++){
      if(arr[i] === val){
          return i;
      }
  }
  return -1;
}

// all are sorted arrays
console.log(search([1,2,3,4,5,6],4)) // 3
console.log(search([1,2,3,4,5,6],6)) // 5
console.log(search([1,2,3,4,5,6],11)) // -1