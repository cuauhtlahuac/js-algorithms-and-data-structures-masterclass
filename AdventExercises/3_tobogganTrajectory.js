const fs = require('fs');

let dataFromTextFile = '';

try {
	dataFromTextFile = fs.readFileSync('3_input.txt', 'utf8');
} catch (e) {
	console.log('Error:', e.stack);
}

const patternList = dataFromTextFile.split('\n');

function calculateSlope(list, right, jump = 1) {
	let trees = 0;
	let currentPosition = right;
	list.forEach((row, index) => {
		// jump = 1   index =

		// 0 #...#
		// 1 #...#
		// 2 #...# - O
		// 3 #...#
		// 4 #...# - O
		// 5 #...#

		// Como decirle no tomes en cuenta ...
		if (index !== 0) {
			// if index + jump % X (par, impar)

			// if 1 + 1 % 1 === 0
			if (index % jump === 0) {
				const limit = row.length - 1;

				trees += row[currentPosition] === '#' ? 1 : 0;

				if (currentPosition + right <= limit) {
					currentPosition += right;
				} else {
					currentPosition = right - 1 + currentPosition - limit;
				}
			}
		}
	});
	return trees;
}

let threesTogether = 1;
threesTogether *= calculateSlope(patternList, 1)
threesTogether *= calculateSlope(patternList, 3)
threesTogether *= calculateSlope(patternList, 5)
threesTogether *= calculateSlope(patternList, 7)
threesTogether *= calculateSlope(patternList, 1, 2)
console.log({threesTogether});
