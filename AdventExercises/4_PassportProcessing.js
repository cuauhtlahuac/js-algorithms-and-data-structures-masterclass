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
	iyr: { type: 'iyr', isValid: iyrIsValid },
	byr: { type: 'byr', isValid: byrIsValid },
	eyr: { type: 'eyr', isValid: eyrIsValid },
	hgt: { type: 'hgt', isValid: hgtIsValid },
	hcl: { type: 'hcl', isValid: hclIsValid },
	ecl: { type: 'ecl', isValid: eclIsValid },
	pid: { type: 'pid', isValid: pidIsValid },
};

const memoizedKeys = (keys, gotKeys, currentKey) => {
	if (gotKeys) return cache[currentKey];
	const cache = {};

	const memoKeys = keys.replace(/^\s+|\s+$/g, '').split(/\s+/);

	const newObject = memoKeys.forEach(str => {
		const [ key, value ] = str.split(':');
		cache[key] = value;
	});

	return cache[currentKey];
};

const validateKeys = (keys, key, value) => {
	let isValid = false;

	return keys[key].isValid(value);
};

function passProcess(passports, keys) {
	let invalid = 0;
	let gotKeys = false;

	passports.forEach(passport => {
		for (const key in keys) {
			const KeyRegExp = new RegExp(`${key}`, 'g');
			const currentKey = passport.match(KeyRegExp);

			if (!currentKey) {
				invalid++;
				break;
			}

			if (
				!validateKeys(
					keys,
					currentKey[0],
					memoizedKeys(passport, gotKeys, currentKey[0]),
				)
			) {
				invalid++;
				break;
			}
		}
		gotKeys = false;
	});
	return passports.length - invalid;
}

console.log(passProcess(passports, keys));

/*
	You can continue to ignore the cid field, but each other field has strict rules about what values are valid for automatic validation:
*/

//byr (Birth Year) - four digits; at least 1920 and at most 2002.
function byrIsValid(year) {
	if (year.length === 4 && (year >= 1920 && year <= 2002)) return true;
	return false;
}
// iyr (Issue Year) - four digits; at least 2010 and at most 2020.
function iyrIsValid(year) {
	if (year.length === 4 && (year >= 2010 && year <= 2020)) return true;
	return false;
}
// eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
function eyrIsValid(year) {
	if (year.length === 4 && (year >= 2020 && year <= 2030)) return true;
	return false;
}
// hgt (Height) - a number followed by either cm or in:
// If cm, the number must be at least 150 and at most 193.
// If in, the number must be at least 59 and at most 76.}
function hgtIsValid(height) {
	if (height.indexOf('cm') > 0) {
		const [ numHeight ] = height.split('cm');
		return Boolean(numHeight >= 150 && numHeight <= 193);
	}
	if (height.indexOf('in') > 0) {
		const [ numHeight ] = height.split('in');
		return Boolean(numHeight >= 59 && numHeight <= 76);
	}
	return false;
}
// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
function hclIsValid(hairColor) {
	return Boolean(hairColor.match(/(^#[0-9A-Fa-f]+$)/g));
}
// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
function eclIsValid(eyeColor) {
	const validColors = {
		amb: 'amb',
		blu: 'blu',
		brn: 'brn',
		gry: 'gry',
		grn: 'grn',
		hzl: 'hzl',
		oth: 'oth',
	};

	return validColors.hasOwnProperty(eyeColor);
}
// pid (Passport ID) - a nine-digit number, including leading zeroes.
function pidIsValid(id) {
	if (id.length === 9 && Boolean(Number(id))) return true;
	return false;
}
