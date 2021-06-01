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

function sumOfYesCounts(rows) {
	let total = 0;

	// Identificar al grupo
	rows.forEach(group => {
		let dictionaryA = {};
		let dictionaryB = {};
		let comesAfterFirstBL = false;

		for (let index = 0; index < group.length; index++) {
			const answer = group[index];

			// Verificamos si hay una persona extra
			const extraPerson = Boolean(answer === '\n');
			
			if (extraPerson) {
				comesAfterFirstBL = true;
				// * Limpiamos los valores del objeto A
				dictionaryA = { ...dictionaryB };
				dictionaryB = {};
			}

			// ? si es un solo pasajero solo llenamos el objeto b
			if (group.indexOf('\n') < 0) {
				dictionaryB[answer] = 1;
				// * Si es más de uno entonces...
			} else {
				// * Si viene antes del primer break line...
				if (!comesAfterFirstBL) {
					// * ...crea el objeto B
					dictionaryB[answer] = 1;
				} else {
					// * Si viene después del primer Break line, verifica si el reciente objeto A creado a partir del objeto B tiene la respuesta 'yes' del valor de la variable answer y agregalo al objeto b
					if (dictionaryA[answer]) dictionaryB[answer] = 1;
				}
			}
		}
		// * Cuando termina el loop del grupo asignamos por último los valores acumulados en B a el Total usando el length.
		total += Object.keys(dictionaryB).length;
	});
	return total;
}

console.log(sumOfYesCounts(rows));
