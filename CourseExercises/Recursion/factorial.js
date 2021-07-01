function iterativeFactorial(num){
  let total = 1;
  for (let index = num; index > 1; index--) {
    total *= index;
  }
  console.log(total);
}

iterativeFactorial(3)

function recursiveSolution(num){
  if(num < 2) return num;
  return num *= recursiveSolution(num - 1)
}

console.log(recursiveSolution(4));