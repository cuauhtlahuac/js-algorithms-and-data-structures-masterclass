/*

Your flight departs in a few days from the coastal airport; the easiest way down to the coast from here is via toboggan.

The shopkeeper at the North Pole Toboggan Rental Shop is having a bad day. "Something's wrong with our computers; we can't log in!" You ask if you can take a look.

Their password database seems to be a little corrupted: some of the passwords wouldn't have been allowed by the Official Toboggan Corporate Policy that was in effect when they were chosen.

To try to debug the problem, they have created a list (your puzzle input) of passwords (according to the corrupted database) and the corporate policy when that password was set.

For example, suppose you have the following list:

1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc

Each line gives the password policy and then the password. The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid. For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.

In the above example, 2 passwords are valid. The middle password, cdefg, is not; it contains no instances of b, but needs at least 1. The first and third passwords are valid: they contain one a or nine c, both within the limits of their respective policies.

How many passwords are valid according to their policies?

*/

/*
Pseudocodigo

1. transformar texto en una lista

2. transformar para que se pueda iterar  o iterar sobre el mismo texto

3. tomar los dos primerios criterios y compararlos con el password

  - Hacer una comparación del tipo < n > con respecto al password



4. comparar dichos valores con el password entregado



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

function howManyPasswordsAreValid(array) {
	let valid = 0;
	array.forEach(passwordWithPolicy => {
		const [ policies, password ] = splitLine(passwordWithPolicy, ':');
		const [ strRange, character ] = splitLine(policies, ' ');
		const { start, end } = getRangeNumbers(strRange);

		if (password && password.length >= start) {
			const charAmount = countString(password, character);
			if (charAmount >= start && charAmount <= end) {
				valid++;
			}
		} else {
			console.count('not valid');
		}
	});
	return valid;
}

console.log(howManyPasswordsAreValid(passwordsList));
