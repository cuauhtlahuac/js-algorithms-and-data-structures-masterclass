/*
Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
*/

/*

TEACHER SOLUTION

*/

function validAnagram(first, second) {
	if (first.length !== second.length) return false;

	const lookup = {};

	for (let i = 0; i < first.length; i++) {
		const letter = first[i];

		lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
	}

	for (let i = 0; i < second.length; i++) {
		const letter = second[i];

		if (!lookup[letter]) { // If check the value of a and is zero, zero is falsy so it will be true: {a : 0} if(!0) true > return false.
			// It's a good resource, because it never be less than zero in order to be an Anagram
			return false;
		} else {
			lookup[letter] -= 1; // Here we subtract one to the current key { a: 1 } -1 = {a: 0}
		}
	}
	return true;
}

console.log(validAnagram('', '')) // true);
console.log(validAnagram('aaz', 'zza')) // false);
console.log(validAnagram('anagram', 'nagaram')) // true);
console.log(validAnagram("rat","car")) // false)
console.log(validAnagram('awesome', 'awesom')) // false);
console.log(validAnagram('qwerty', 'qeywrt')) // true);
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true);

/*

MY SOLUTION

*/
function mineValidAnagram(wordA, wordB) {
	// add whatever parameters you deem necessary - good luck!
	if (wordA.length !== wordB.length) return false;
	const objA = {};
	const objB = {};
	for (const word of wordA) {
		objA[word] = (objA[word] || 0) + 1;
	}
	for (const word of wordB) {
		objB[word] = (objB[word] || 0) + 1;
	}

	for (let key in objA) {
		// If the key exist
		if (!(key in objB)) return false;

		if (objA[key] !== objB[key]) return false;
	}

	return true;
}

