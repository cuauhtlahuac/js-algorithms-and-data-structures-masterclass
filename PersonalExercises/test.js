console.log('test');

function Person(name){
  var object = {};
  object.name=name;
  object.age=21;
  return object;
}
var object = new Person("Sudheer");
var tcejbo = new Person("Madre mía");

console.log(object)
console.log(tcejbo)

const singleton = new function(){
  this.name = "Sudheer";
}
singleton.name = 'hola' 

console.log(singleton);