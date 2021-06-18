/*
checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.
*/

function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  let start = 0;
  let end = args.length -1;
  let middle = end / 2;
  
  if(typeof args[1] === 'string'){
    for (const i in args)  {
      console.log(middle, i);
      if(middle <= i) return false;

      if(args[start].charCodeAt() === args[end].charCodeAt()) return true;

      if(args[start].charCodeAt() < args[end].charCodeAt()){
        end--;
      }else{
        start++;
      };
  }  
  } else {
    for (const i in args)  {

      if(middle === i) return false;

      if(args[start] === args[end]) return true;

      if(args[start] < args[end]){
        end--;
      }else{
        start++;
      };
  }  
    
  }
}

console.log(areThereDuplicates(1,2,3))// false
console.log(areThereDuplicates(1,2,2))// true
console.log(areThereDuplicates('s', 'a', 'c', 'b', 'a', 'z'))// true