/*
 which takes in two strings and checks whether the characters in the first string
 form a subsequence of the characters in the second string. In other words,
 the function should check whether the characters in the first string appear somewhere in the second string, 
*/

function isSubsequence(strA, strB){
  // good luck. Add any arguments you deem necessary.
  let anchor = 0;
  let finder = 0;

  while(anchor <= finder && finder <  strB.length){
    if(strA[anchor] === strB[finder]){

      anchor++
      finder++
    }else{
      finder++
    }

    if (strA.length === anchor) return true;
  }
  return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('circulo de sol', 'reciporcupllo palde lopsoyrl')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)