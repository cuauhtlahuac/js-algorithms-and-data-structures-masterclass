const getDocument = docRoute => {
	const fs = require('fs');

	let dataFromTextFile = '';

	try {
		return fs.readFileSync(docRoute, 'utf8');
	} catch (e) {
		throw new Error('Error:', e.stack);
	}
};

const rows = getDocument('5_input.txt').split(/\n/g);

/*
the first letter indicates whether the seat is in the front (0 through 63) or the back (64 through 127)
The next letter indicates which half of that region the seat is in, and so on until you're left with exactly one row.
*/

/*
Start by considering the whole range, rows 0 through 127.
F means to take the lower half, keeping rows 0 through 63: 0 - 63
B means to take the upper half, keeping rows 32 through 63: _63_ / 2 = _32_ consider the zero
F means to take the lower half, keeping rows 32 through 47: _32_ / 2 = 16 -> 32+16 = 48 - 1 = _47_
B means to take the upper half, keeping rows 40 through 47:  16 / 2 = 8 -> _47_ - 8 = 39 + 1 = _40_
B keeps rows 44 through 47. 8 / 2 = 4 
F keeps rows 44 through 45. 4 / 2 = 2
The final F keeps the lower of the two, row 44. 

The last three characters will be either L or R; these specify exactly one of the 8 columns of seats on the plane (numbered 0 through 7).
The same process as above proceeds again, this time with only three steps. L means to keep the lower half, while R means to keep the upper half.

For example, consider just the last 3 characters of FBFBBFFRLR:

Start by considering the whole range, columns 0 through 7.
R means to take the upper half, keeping columns 4 through 7.
L means to take the lower half, keeping columns 4 through 5.
The final R keeps the upper of the two, column 5.
So, decoding FBFBBFFRLR reveals that it is the seat at row 44, column 5.

Every seat also has a unique seat ID: multiply the row by 8, then add the column. In this example, the seat has ID 44 * 8 + 5 = 357.
*/

const rowRange = {
	start: 0,
	end: 127,
};

const columnRange = {
	start: 0,
	end: 7,
};

let highest = 0;

// Necesito encontrar el asiento basandome en los primeros 7 caracteres,
// F significa que comienza de 0 a 63 (63 filas) y el B de 64 al 127 (63).

let idsList = []

for (let row of rows) {
	const binaryListFB = transformToBinarySearchInput(row, 'F', 'B');
	const binaryListLR = transformToBinarySearchInput(row, 'L', 'R');

	let seatRow = binarySearch(binaryListFB, rowRange);
	let columnRow = binarySearch(binaryListLR, columnRange);

	// What is the highest seat ID on a boarding pass?
	highest = Math.max(highest, seatRow * 8 + columnRow);

	const id = seatRow * 8 + columnRow
	idsList.push(id)

	// B range 64 - 127 - 32
	// B o F es colocado, si es F entonces se parte de adelante para atras y si es B se parte de atras para adelante
}

// start 68
// end 970

function compare( a, b ) {
	if ( a > b ) return 1;
	if ( b > a ) return -1;
	return 0;
}

idsList.sort(compare)

for (let index = 0; index < idsList.length; index++) {
	const element = idsList[index];
	if(index + 68 - element < 0){
		console.log({element});
		return element
	}
}

console.log({highest});

function binarySearch(row, range) {
	const newRange = { ...range };
	let rowNumber = 0;

	for (let i = 0; i < row.length; i++) {
		let reachEnd = Boolean(i === row.length - 1);

		if (row[i]) {
			if (reachEnd) rowNumber = newRange.start;
			newRange.end = Math.floor((newRange.start + newRange.end + 1) / 2) - 1;
		} else {
			if (reachEnd) rowNumber = newRange.end;
			newRange.start = Math.floor((newRange.start + newRange.end + 1) / 2);
		}
	}

	return rowNumber;
}

function transformToBinarySearchInput(input, upper, lower) {
	let arr = [];
	for (const char of input) {
		if (char === upper || char === lower) {
			arr.push(char === upper);
		}
	}
	return arr;
}
