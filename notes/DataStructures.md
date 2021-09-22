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