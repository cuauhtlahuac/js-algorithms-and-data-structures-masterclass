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

for (let row of rows) {
	// F range 0 - 63  - 64

	let startRange = 0;
	let endRange = 127;

	for (let i = 0; i < row.length; i++) {
		// crear current whole range
		
		if (row.charAt(i) === 'F') {
			endRange -= endRange / 2
		} else {
			startRange += endRange / 2;
		}

		console.table({char: row.charAt(i), startRange, endRange });
	}
	// B range 64 - 127 - 32
	// Necesito encontrar el asiento basandome en los primeros 7 caracteres , el F significa que comienza de 0 a 63 (63 filas) y el B de 64 al 127 (63), se va partiendo conforme
	// B o F es colocado, si es F entonces se parte de adelante para atras y si es B se parte de atras para adelante

	//	console.log(row);
}
// INPUT FBFBBFFRLR

// OUTPUT 357

// What is the highest seat ID on a boarding pass?
