/*
While it appears you validated the passwords correctly, they don't seem to be what the Official Toboggan Corporate Authentication System is expecting.

The shopkeeper suddenly realizes that he just accidentally explained the password policy rules from his old job at the sled rental place down the street! The Official Toboggan Corporate Policy actually works a little differently.

Each policy actually describes two positions in the password, where 1 means the first character, 2 means the second character, and so on. (Be careful; Toboggan Corporate Policies have no concept of "index zero"!) Exactly one of these positions must contain the given letter. Other occurrences of the letter are irrelevant for the purposes of policy enforcement.

Given the same example list from above:

1-3 a: abcde is valid: position 1 contains a and position 3 does not.
1-3 b: cdefg is invalid: neither position 1 nor position 3 contains b.
2-9 c: ccccccccc is invalid: both position 2 and position 9 contain c.
How many passwords are valid according to the new interpretation of the policies?


*/
const fs = require('fs');

let dataFromTextFile = '';

try {
	dataFromTextFile = fs.readFileSync('2_puzzleInput.txt', 'utf8');
} catch (e) {
	console.log('Error:', e.stack);
}

const passwordsList = dataFromTextFile.split('\n');

function splitLine(str, separator) {
	// Agregar validacion
	return str.split(separator);
}

function getRangeNumbers(str) {
	const [ start, end ] = splitLine(str, '-');
	return { start: Number(start), end: Number(end) };
}

function countString(str, char) {
	const cleanStr = str.trim();
	let dicChars = {};

	for (let item of cleanStr) {
		if (dicChars[item]) {
			dicChars[item]++;
		} else {
			dicChars[item] = 1;
		}
	}

	return dicChars[char];
}

function charExist(str, char, position) {
	return Boolean(str.charAt(position) === char);
}

function getPasswordPosition(str, char, start, end) {
	// Una posicisión debe tenerla pero no dos
	// 1  1
	// if(charExist(str, char, start) && charExist(str, char, end)) return false

	// and, or, not, xor,

	return Boolean(charExist(str, char, start) ^ charExist(str, char, end));
}

function howManyPasswordsAreValid(array) {
	let valid = 0;
	array.forEach(passwordWithPolicy => {
		// Este se puede mover a una función
		const [ policies, password ] = splitLine(passwordWithPolicy, ':');
		const [ strRange, character ] = splitLine(policies, ' ');
		const { start, end } = getRangeNumbers(strRange);

		if (password && password.length >= start) {
			if (getPasswordPosition(password, character, start, end)) {
				valid++;
			}
		} else {
			console.count('not valid');
		}
	});
	return valid;
}

console.log(howManyPasswordsAreValid(passwordsList));
