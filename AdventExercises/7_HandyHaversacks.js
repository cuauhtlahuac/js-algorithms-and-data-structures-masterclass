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
	constructor(root, nodes){
		this.root = root;
		this.nodes = nodes;
	}
	findNode(id){
		return this.nodes[id]
	}
	createNode(id, children){
		const childrenL = [];
		let newNode =  this.findNode(id) ? this.findNode(id) : new Node(id, null, null);
		
		for (const child of children) {
			if(this.findNode(child)){
				childrenL.push(this.findNode(child))
			}else{
				const node = new Node(child, null, newNode);
				childrenL.push(node)
			}
		}

		newNode.children = childrenL;
		return newNode;
	}
	countNodes(){}
}

class Node {
	constructor(id, children, parent){
		this.id = id;
		this.children = children;
		this.parent = parent;
	}
}


function handyHaversacks(rules, luggage) {
	const tree = new Tree(null, {});
	// Pasar como parámetro el nombre de la bolsa
	// como parámetro las reglas

	// Si encuentras contain no others bags do nothing
	
	// Sí encuentras el nombre de la bolsa...
	rules.forEach(rule => {
		console.log(rule);
		if(findTheWord(rule, luggage)){
			console.log(luggage, " found ----------------------");
			//...entonces guarda el nombre de la bolsa que la puede contener
			const bagRe = new RegExp(/.*(?=\s+bags\s+contain)/, 'g')
			const container = bagRe.match(rule);
			console.log(container);
		}
			// Sí encuentras alguna de las bolsas que contiene tu bolsa entonces guarda el nombre
			// node[key] key in obj
			tree.createNode("", null)


				// Si el valor del shiny gold  { {children: [node]}}
		// 
	});
}
const node1 = new Node("59898", null, null)

const tree = new Tree(null, {});

const node2 = new Node("5s15d1", [node1], [node1] );
console.log(node2.parent, node2.children);

console.log(handyHaversacks(rules, 'shiny gold'));

console.log(tree.children["5s15d1"]); // comun // function 



function findTheWord(phrase, word){
  for (let index = 0; index < phrase.length; index++) {
    let wordFound = false;
    const element = phrase[index];

    if(phrase.charCodeAt(index) === word.charCodeAt(0)){
      if(phrase.charCodeAt(index + 1) === word.charCodeAt(1)){
        for (let windex = 0; windex < word.length; windex++) {
          const element = word[windex];
          wordFound = phrase[index + windex] !== element ? false : true;
        }        
      }
    }

    if(wordFound){
      return true;
    }
  }
}