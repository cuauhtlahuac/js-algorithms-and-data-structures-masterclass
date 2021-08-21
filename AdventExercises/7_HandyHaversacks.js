const getDocument = docRoute => {
	const fs = require('fs');

	let dataFromTextFile = '';

	try {
		return fs.readFileSync(docRoute, 'utf8');
	} catch (e) {
		throw new Error('Error:', e.stack);
	}
};

const rules = getDocument('7_input.txt').split(/\n/g);

// Necesito hallar las bolsas que puedan contenter mi "shiny gold bag"
// Es decir, si las azules o blancas pueden contener mi bolsa entonces cuentan como válidas
// pero incluir si exiten moradas que puedan llevar azules y/o blancas entonces también cuentan
// mismo caso para bolsas negras.

class Tree {
	constructor(luggage, nodes) {
		this.luggage = luggage;
		this.nodes = nodes;
		this.root = null;
		this.counter = 0;
	}
	findNode(id) {
		return this.nodes[id];
	}

	createNode(id, children) {
		// Check if the objet already exist.
		let newNode = this.findNode(id) || new Node(id, null, null);

		for (const child of children) {
			// Si el hijo existe en los nodos regresame ese hijo sino crea uno
			let childNode = this.findNode(child) || new Node(child, null, null);

			// Guardamos el hijo en el papá
			newNode.insertChild(childNode);

			// We save the parent in the new child
			childNode.insertParent(newNode);

			// Here we save the child in node list
			this.nodes[childNode.id] = childNode;
		}

		// We save the newNode in nodes list
		this.nodes[newNode.id] = newNode;

		return newNode;
	}

	countParents(node) {
		return this.nodes[node].parents.length;
	}

	countContainingParents(node) {
		const obj = {};
		return this.countContainingParentsRecursive(node, obj);
	}

	countContainingParentsRecursive(node, obj) {
		let counter = 0;

		node.parents.forEach(parent => {
			if (!obj[parent.id]) {
				// Stopping condition
				obj[parent.id] = parent;
				counter += this.countContainingParentsRecursive(parent, obj);
				counter++;
			}
		});

		return counter;
	}

	countContainingParentsIterative(node) {
		let listOfParents = [];

		node.parents.forEach(parent => {
			listOfParents.push(parent.parents);
		});
		console.log({X: listOfParents[1]});
		let queue = [];


		// [ [Node], [Node], [Node], [Node] ]
		let counter = 0;
		while(listOfParents.length > counter){
			if(listOfParents[counter].length > 0){

				queue.push(listOfParents[counter][0].parents)
			}
			counter++
		}
		console.log({queue});
	}
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
		this.insertNode(node, this.parents);

		/* 		if (node.parents.length > 0) {
			this.insertNodes(node.parents);
		} */
	}

	insertNode(node, arr) {
		const nodeIndex = arr.findIndex(nodeInd => {
			return node.id === nodeInd.id;
		});

		if (nodeIndex < 0) {
			arr.push(node);
		}
	}

	/* 	insertNodes(parents) {
		parents.forEach(node => {
			this.insertNode(node, this.parents);
		});
	} */
}

function handyHaversacks(rules, luggage) {
	const tree = new Tree(luggage, {});

	rules.forEach((rule, ind) => {
		const { container, children } = getContainerAndChildren(rule);

		tree.createNode(container, children);
	});
	tree.countContainingParentsIterative(tree.findNode(luggage));
	return tree.countContainingParents(tree.findNode(luggage));
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
// Ideas para debuguear
// gguardar un has child node tru / false
//
