/*
Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
*/


function validAnagram(wordA, wordB) {
  if(wordA.length !== wordB.length) return false;
  objA = {}
  objB = {}
  for (const word of wordA) {
    objA[word] = (objA[word] || 0) + 1 
  }
  for (const word of wordB) {
    objB[word] = (objB[word] || 0) + 1
  }

  for(let key in objA){
    // If the key exist
    if(!(key in objB)) return false;

    if(objA[key] !== objB[key]) return false;
  }

  return true;
}

const firstWd = 'anagram'
const secondWd = 'nagaram'

console.log(validAnagram(firstWd, secondWd));