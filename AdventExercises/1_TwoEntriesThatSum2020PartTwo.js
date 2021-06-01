const fs = require('fs');

let data = '';

try {
	data = fs.readFileSync('1_inputTwoEnriesPartTwo.txt', 'utf8');
} catch (e) {
	console.log('Error:', e.stack);
}

const inputTransformed = data.split('\n').map(elem => +elem);

function threeEntries() {
	let total = 0;
	const result = inputTransformed.map((num, ind, arr) => {
		// 2020 - a = current
		const current = 2020 - num; // 2 primeros numeros para encontrar el tercero

		// a + b + c = 2020
		// 2020 = a + b + c

		// 2020 - a = b + c

		// loop b + c = 2020 - num
		// loop b + c = 324
		// 1010 = 1010

		for (let b of arr) {
			for (let c of arr) {
				if (b + c === current) console.log(b * c * num);
			}
		}
	});
}

console.log(threeEntries());
// foo(baa())
// n^3 !
