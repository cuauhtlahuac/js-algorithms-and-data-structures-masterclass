const getDocument = docRoute => {
	const fs = require('fs');

	let dataFromTextFile = '';

	try {
		return fs.readFileSync(docRoute, 'utf8');
	} catch (e) {
		throw new Error('Error:', e.stack);
	}
};

const rules = getDocument('7_test.txt').split(/\n/g);

// Necesito hallar las bolsas que puedan contenter mi "shiny gold bag"
// Es decir, si las azules o blancas pueden contener mi bolsa entonces cuentan como válidas
// pero inclusi si exiten moradas que puedan llevar azules y/o blancas entonces también cuentan
// mismo caso para bolsas negras.

/*
		tree - 
		new Bag - nodo.
*/

class Tree {
	constructor(root, nodes) {
		this.root = root;
		this.nodes = nodes;
	}
	findNode(id) {
		return this.nodes[id];
	}

	createNode(id, children) {
		// check if the objet already exist
		let newNode = this.findNode(id)
			? this.findNode(id)
			: new Node(id, null, null);

		// Por cada hijo
		for (const child of children) {
			// Si el hijo existe en los nodos regresame ese hijo
			let childNode = this.findNode(child)
				? this.findNode(child)
				: // Si no crea uno nuevo
				new Node(child, null, null);

			newNode.insertChild(childNode);

			childNode.insertParent(newNode);
			// colocamos en el array de node el children node
			this.nodes[childNode.id] = childNode;
		}

		this.nodes[newNode.id] = newNode;

		return newNode;
	}
	// solo falta un metodo para insertar los padre de los padres
	countNodes() {}
}

class Node {
	constructor(id, children = [], parents = []) {
		this.id = id;
		this.children = children === null ? [] : children;
		this.parents = parents === null ? [] : parents;
	}
	
	insertChild(node) {
		this.insertNode(node, this.children);
	}
	
	insertParent(node) {
		if (this.parents.length < 1) {
			this.parents.push(node);
		} else {
			if (node.parents.length > 0) {
				this.insertNodes(this.parents, node.parents);
			}
		}
	}

	insertNode(node, arr) {
		const nodeIndex = arr.findIndex(nodeInd => {
			return node.id === nodeInd.id;
		});

		if (nodeIndex < 0) {
			arr.push(node);
		}
	}
	
	insertNodes(arr1, arr2) {
		let large;
		let short;

		if (arr1.length >= arr2.length) {
			large = arr1;
			short = arr2;
		} else {
			large = arr2;
			short = arr1;
		}
		console.log(
			'>------------>>>  Nodes\n',
			{large, short},
			'\nNodes  <<<- - - - - - - - <\n\n',
		);

		let arr3 = [];
			large.forEach((item, i) => {
			if(short[i] && item.id !== short[i].id){
				arr3.push(item);	
				arr3.push(short[i]);	
			}
		});
		console.log(`ARR3 ${this.id}`, arr3);
		this.parents = arr3;
	}
}

function handyHaversacks(rules, luggage) {
	const tree = new Tree(null, {});

	rules.forEach((rule, ind) => {
		console.log(
			`\n\n${ind +
				1}: *_*_*_*_*_*_*_*_*_*_*_*_*_*_* rule *_*_*_*_*_*_*_*_*_*_*_*_*_*_*\n${rule}`,
		);
		console.log(
			`_________________________*_________________________________\n\n`,
		);

		const { container, children } = getContainerAndChildren(rule);
		console.log({ container, children });
		tree.createNode(container, children);
	});
	console.log({ tree: tree.nodes[luggage] });
}

console.log(handyHaversacks(rules, 'shiny gold'));

/*
 UTILS ...
*/

function findTheWord(phrase, word) {
	for (let index = 0; index < phrase.length; index++) {
		let wordFound = false;
		const element = phrase[index];

		if (phrase.charCodeAt(index) === word.charCodeAt(0)) {
			if (phrase.charCodeAt(index + 1) === word.charCodeAt(1)) {
				for (let windex = 0; windex < word.length; windex++) {
					const element = word[windex];
					wordFound = phrase[index + windex] !== element ? false : true;
				}
			}
		}

		if (wordFound) {
			return true;
		}
	}
}

function getContainerAndChildren(rule) {
	const [ container, children ] = rule.split('contain');
	const newContainer = getContainer(container);
	const newChildren = getChildren(children);
	return { container: newContainer, children: newChildren };
}

function getContainer(containerText) {
	const [ container ] = containerText.split('bags');
	return container.trim();
}

function getChildren(childrenText) {
	const arrChildren = childrenText.split(',');
	let currentChildren = [];

	arrChildren.forEach(element => {
		const [ child ] = element.slice(3).split('bag');
		currentChildren.push(child.trim());
	});
	return currentChildren;
}
