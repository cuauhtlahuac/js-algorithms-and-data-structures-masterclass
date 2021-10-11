# Data Structures

[Introduction](#introduction)

[Singly Linked List](#singly-linked-list)

## Introduction

### WHAT DO THEY DO?
Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data.

Thing about an array, an array holds many values and also contains the relationships between those values (the order), and comes with built-in methods and functionality.

There are many because some of them are very specialized, but some of them are pretty general.

##### What is a class?

- Classes are blueprints that when created make objects known as instances. A blueprint for creating objects with pre-defined properties and methods
### ES2015 Class

[SLIDES es2015 class syntax](https://cs.slides.com/colt_steele/es2015-class-syntax)

- Classes are created with the new keyword

- The constructor function is a special function that gets run when the class is instantiated

- Instance methods can be added to classes similar to methods in objects

- Class methods can be added using the static keyword

#### Class Syntax static key word

[more information about](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)

The only way to call statics methods and properties are by call the class it self like...

``` js
class Point {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  static distance(a,b){
    const dx = a.x - b.x; // here we call the property of object a & b, No matter what values was passed
    const dy = a.y - b.y;

    return Math.hypot(dx, dy)
  }
}

const p1 = new Point(5,5); // { x: 5, y: 5 }
const p2 = new Point(10,10); // { x: 10, y: 10 }

// we call this helper like this because is not necessary to have an instantiation,
// it's oly a plain method that will work if you passing the correct data.
Point.distance(p1, p2) // it will return the result with out call the this key word
```
## Singly Linked List

[SLIDES Singly Linked List](https://cs.slides.com/colt_steele/singly-linked-lists)

### What is a linked list?

A data structure that contains a head (beginning), tail (end) and length property.

Linked Lists consist of nodes, and each node has a value and a pointer to another node or null.

It is like a skycraper but with no elevator in it, only stairs. In an array we can say, put me in the fifth floor as an elevator do, but with linked list we can only go though the stairs.

[Visual algo of singly linked list](https://visualgo.net/en/list?slide=1)

### Comparisons with Arrays

#### Lists

- Do not have indexes!
- Connected via nodes with a next pointer
- Random access is not allowed

#### Arrays

- Indexed in order!
- Insertion and deletion can be expensive
- Can quickly be accessed at a specific index

### Liked List Push Method

In order to avoid the list.next.next.next ... hell, we gonna implement a push method with the next pseudocode.

#### Push Method Pseudocode
 
- This function should accept a value
- Create a new node using the value passed to the function
- If there is no head property on the list, set the head and tail to be the newly created node
- Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
- Increment the length by one
- Return the linked list

#### Explanation of the tail confusion

I see how this bit is confusing. I'll try and illustrate how it works. Imagine this is our list:

45 ---> 78 ---> 99
             **TAIL**
Suppose we want to insert 104.

The key is that `this.tail` is just a pointer that will reference a node on the list. It's just a label. We have two steps to make this work...first we add our node to the end of the list, and second we update `this.tail` to point to the newly added node.

When we call `this.tail.next = newNode` , we're adding the newNode to the end of the list. Our list would look like this now:

45 ---> 78 ---> 99 ---> 104 .

             **TAIL**
We've added the newNode to the list, but the tail pointer is still incorrect. If we called `this.tail` on the list, we still get 99. So to update it, we run `this.tail = newNode`. This moves the "label" to the correct spot.

45 ---> 78 ---> 99 ---> 104
                      **TAIL**

Could we say then that the linked list consists precisely in that? that every node in the list is (just) a property of the previous node?

Exactly! To access an entire linked list, the only thing you need is the first node.  From there, the next node is just another property that we happened to call next in our example.  That node has its own next property, and so on.  When you work with a linked list, you really only "see" one node at any given time rather than "seeing" the entire list at once.

### Liked List Pop Method

#### Pop Method Pseudocode

- If there are no nodes in the list, return undefined
- Loop through the list until you reach the tail
- Set the next property of the 2nd to last node to be null
- Set the tail to be the 2nd to last node
- Decrement the length of the list by 1
- Return the value of the node removed

### Liked List Shifting Method

Removing a new node from the beginning of the Linked List!

#### Shifting Method Pseudocode

- If there are no nodes, return undefined
- Store the current head property in a variable
- Set the head property to be the current head's next property
- Decrement the length by 1
- Return the value of the node removed

### Unshifting

Adding a new node to the beginning of the Linked List!

#### Shifting Method Pseudocode

- This function should accept a value
- Create a new node using the value passed to the function
- If there is no head property on the list, set the head and tail to be the newly created node
- Otherwise set the newly created node's next property to be the current head property on the list
- Set the head property on the list to be that newly created node
- Increment the length of the list by 1
- Return the linked list

### GET

Retrieving a node by it's position in the Linked List!

#### Get Method Pseudocode

- This function should accept an index
- If the index is less than zero or greater than or equal to the length of the list, return null
- Loop through the list until you reach the index and return the node at that specific index

### SET

Changing the value of a node based on it's position in the Linked List

#### Set Pseudocode

- This function should accept a value and an index
- Use your get function to find the specific node.
- If the node is not found, return false
- If the node is found, set the value of that node to be the value passed to the function and return true


### Insert

Adding a node to the Linked List at a specific position.

#### Insert pseudocode

If the index is less than zero or greater than the length, return false
If the index is the same as the length, push a new node to the end of the list
If the index is 0, unshift a new node to the start of the list
Otherwise, using the get method, access the node at the index - 1
Set the next property on that node to be the new node
Set the next property on the new node to be the previous next
Increment the length
Return true

### Remove

Removing a node from the Linked List at a specific position.

