function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1,2,3))// false
console.log(areThereDuplicates(1,2,2))// true
console.log(areThereDuplicates('s', 'a', 'c', 'b', 'a', 'z'))// true