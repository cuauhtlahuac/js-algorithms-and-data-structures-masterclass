function iterativeFactorial(num){
  let total = 1;
  for (let index = num; index > 1; index--) {
    total *= index;
  }
  console.log(total);
}

iterativeFactorial(3)