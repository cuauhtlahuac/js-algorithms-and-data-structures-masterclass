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

const phrase = "Bacon ipsum dolor amet corned beef tri-tip fatback tongue capicola salami cow picanha. Kielbasa filet mignon pancetta sausage corned beef. Capicola corned beef tail chicken."
const word = "fatback"
console.log(findTheWord(phrase, word));