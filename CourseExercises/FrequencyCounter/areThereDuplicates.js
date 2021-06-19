/*
checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.
*/

function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)   
   if(args.length <= 0) return false;
 
   const obj_a = {};
 
   for(let char of args){
     obj_a[char] = (obj_a[char] += 1) || (obj_a[char] = 1);
   }
   for(let item in obj_a){
     if(obj_a[item] > 1) return true;
 
   }
   return false
}

console.log(areThereDuplicates(1,2,3))// false
console.log(areThereDuplicates(1,2,2))// true
console.log(areThereDuplicates('s', 'a', 'c', 'b', 'a', 'z'))// true