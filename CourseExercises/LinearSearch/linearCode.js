const CheckTime = require("../utils/timer");

const { print } = new CheckTime(new Date)

// This function accepts an array and a value
function linearSearch(arr, val) {
  // Loop through the array
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    //  check if the current array element is equal to the value
    if(element === val){
      // If it is, return the index at which the element is found
      return index;
    }
    
  }
  // If the value is never found, return -1
  return -1;
}

print(linearSearch([1,5,9,8,63,2], 8)) // index 3
print(linearSearch([1,5,9,8,63,2], 90)) // -1

