

function sameFrequency(a, b){
  // good luck. Add any arguments you deem necessary.
  const as = a.toString();
  const bs = b.toString();
  
  if(as.length != bs.length) return false;

  const obj_a = {};
  const obj_b = {};

  for(let char of as){
    obj_a[char] = (obj_a[char] += 1) || (obj_a[char] = 1);
  }

  for(let char of bs){
    obj_b[char] = (obj_b[char] += 1) || (obj_b[char] = 1);
  }

  for(let item in obj_a){
    if(!(item in obj_b)) return false;

    if(obj_b[item] !== obj_a[item]) return false;
  }

  return true
}


console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14) )// false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222) )// false