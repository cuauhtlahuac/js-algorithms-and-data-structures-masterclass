const getDocument = docRoute => {
	const fs = require('fs');

	let dataFromTextFile = '';

	try {
		return fs.readFileSync(docRoute, 'utf8');
	} catch (e) {
		throw new Error('Error:', e.stack);
	}
};

const rows = getDocument('6_input.txt').split(/\n\n/g);

function sumOfYesCounts(rows){
	let total = 0;
	rows.forEach((line)=> {
		const obj = {}
		for (let index = 0; index < line.length; index++) {
			const element = line[index];

			if(isAlphanumeric(element)){
				if(!obj[element]) total++
				obj[element] = 1;
			}
		}
	})
	return total;
}

console.log(sumOfYesCounts(rows));

function isAlphanumeric(char) {
  const code = char.charCodeAt(0);
  if(
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (0-9)
    !(code > 96 && code < 123) // lower alpha (a-z)
    )
    {
      return false
    }

  return true;
}

// you only Wrote down yes answers 

// In this group, there are 6 questions to which anyone answered "yes": a, b, c, x, y, and z.
// (Duplicate answers to the same question don't count extra; each question counts at most once.)

/*
input
---------
abc

a
b
c

ab
ac

a
a
a
a

b
---------

This list represents answers from five groups:

The first group contains one person who answered "yes" to 3 questions: a, b, and c.
The second group contains three people; combined, they answered "yes" to 3 questions: a, b, and c.
The third group contains two people; combined, they answered "yes" to 3 questions: a, b, and c.
The fourth group contains four people; combined, they answered "yes" to only 1 question, a.
The last group contains one person who answered "yes" to only 1 question, b.
In this example, the sum of these counts is 3 + 3 + 3 + 1 + 1 = 11.

For each group, count the number of questions to which anyone answered "yes". What is the sum of those counts?
*/