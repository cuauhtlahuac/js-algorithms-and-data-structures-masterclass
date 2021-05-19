const getDocument = docRoute => {
	const fs = require('fs');

	let dataFromTextFile = '';

	try {
		return fs.readFileSync(docRoute, 'utf8');
	} catch (e) {
		throw new Error('Error:', e.stack);
	}
};

const passports = getDocument('4_input.txt').split(/\n\n/g);

//console.log(passports.split(/\n\n/g));
/*
The automatic passport scanners are slow because they're having trouble detecting which passports have all required fields. The expected fields are as follows:

byr (Birth Year)
iyr (Issue Year)
eyr (Expiration Year)
hgt (Height)
hcl (Hair Color)
ecl (Eye Color)
pid (Passport ID)
cid (Country ID)
*/

const keys = {
	iyr: 'iyr',
	byr: 'byr',
	eyr: 'eyr',
	hgt: 'hgt',
	hcl: 'hcl',
	ecl: 'ecl',
	pid: 'pid',
};

function passProcess(passports, keys) {
	let invalid = 0;
	passports.forEach(passport => {
		for (const key in keys) {
			const currentKey = new RegExp(`${key}:`, 'g');

			const keyExist = Boolean(passport.match(currentKey));

			if (!keyExist) {
				invalid++;
				break;
			}
		}
	});
	return passports.length - invalid;
}

console.log(passProcess(passports, keys));
