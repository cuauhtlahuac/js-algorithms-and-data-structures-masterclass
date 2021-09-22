# Data Structures

## Resources

[Slides es2015 class syntax](https://cs.slides.com/colt_steele/es2015-class-syntax)

[Introduction](#introduction)

## Introduction

### WHAT DO THEY DO?
Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data.

Thing about an array, an array holds many values and also contains the relationships between those values (the order), and comes with built-in methods and functionality.

There are many because some of them are very specialized, but some of them are pretty general.

##### What is a class?

- Classes are blueprints that when created make objects known as instances. A blueprint for creating objects with pre-defined properties and methods
### ES2015 Class

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

