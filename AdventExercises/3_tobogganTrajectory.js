const fs = require('fs');

let dataFromTextFile = '';

try {
	dataFromTextFile = fs.readFileSync('3_input.txt', 'utf8');
} catch (e) {
	console.log('Error:', e.stack);
}

const patternList = dataFromTextFile.split('\n');

// encontrar límite de fila y guardarlo en const

// crear una constante para la posición en este cas 3

const position = 3;

// crear una variable para hacer seguimiento del avance de la posición

let currentPosition = 0;

// crear variable trees

let trees = 0;

// recorrer la fila desde la posicición 1

patternList.forEach((row, index) => {
	const limit = row.length - 1;
	// contar tres posiciones + 1

	// recorrer la fila

	// .........#....#.###.........##.
	// ..###.#......#......#.......##.
	// ##....#.#.......#.....#........

	// checar si es arbol y guardarlo en la variable #
	console.table({ row, currentPosition, limit, trees });
	console.log(row[currentPosition]);
  
	//  guardar la posición actual si la posicion es menor al límite
  
	if (currentPosition + position < limit) {
    currentPosition += position;
		console.log({ cpppml: currentPosition, limit });
	} else {
    // currentPosi - limit = 2 - position = newPosition
		currentPosition = position + currentPosition - limit;
		console.log({ f: currentPosition });
	}
  trees += row[currentPosition] === '#' ? 1 : 0;

	// encontrar la siguiente posición sumando la variable más 3
});

console.log(trees);

// regresar el total
