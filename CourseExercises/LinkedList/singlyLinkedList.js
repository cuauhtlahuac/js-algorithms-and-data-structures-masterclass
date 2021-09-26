class Node {
	constructor(val) {
		// piece of data - val
		this.val = val;
		// reference to next node - next
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		// We need a tail, a head and a length
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	// This function should accept a value
	push = (val) => {
		// Create a new node using the value passed to the function
		const node = new Node(val)
		// If there is no head property on the list, set the head and tail to be the newly created node
		if(!this.head){
			this.head = node; // head and tail share the same node 
			this.tail = this.head;
		} else {
			// Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
			// take the current tail, take the next property and set that equal to the new node
			this.tail.next = node; // * here we add a new node to the next property of the current tail(it is a label of the node). This next was null, but now is equal to the new node
			// and then we have to update the tail
			this.tail = node; // * And here w assign the new node to the tail, so the next time that we save the new node in this.tail.next will gonna be the next property of this node
		}
		// Increment the length by one
		this.length++
		// Return the linked list
		return this;
	}
	pop = () => {
		// if empty do nothing
		if(!this.head) return;
		// Vertex pre = head
		let pre = this.head;
		// temp = head.next
		let temp = this.head.next;
		// while ( temp.next != null)
			while (temp.next != null) {
				// pre = pre.next
				pre = pre.next;
				temp = temp.next
			}
			// pre.next = null
			pre.next = null;
		// delete temp
		temp = undefined;
		this.tail = pre
		this.length--
		return pre.next;
	}	
}

let first = new SinglyLinkedList();
first.pop();
first.push('what');
console.log(first.head);
first.push('are');
console.log(first.head.next);
first.push('fking');
console.log(first.head.next?.next);
console.log('TAIL: ', first.tail);
console.log('POP! -----');
first.pop();
console.log('tail: ', first.tail);
console.log(first);
first.push('happen');
console.log(first.head.next?.next);
first.push('here');
console.log(first.head.next?.next?.next);
