function areThereDuplicates(...args) {
	// Two pointers
  if(typeof args[1] === 'string'){
    args.sort();
  }else {
    // It is a Number?
    args.sort((a,b) => a > b);
  }

	let start = 0;
	let next = 1;
	while (next < args.length) {
		if (args[start] === args[next]) {
			return true;
		}
		start++;
		next++;
	}
	return false;
}

console.log(areThereDuplicates(1,2,3))// false
console.log(areThereDuplicates(1,2,2))// true
console.log(areThereDuplicates('s', 'a', 'c', 'b', 'a', 'z')); // true
