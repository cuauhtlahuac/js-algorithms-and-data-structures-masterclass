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
*/

for (let row of rows) {

  // F range 0 - 63
  // B range 64 - 127

	console.log(row);
}
