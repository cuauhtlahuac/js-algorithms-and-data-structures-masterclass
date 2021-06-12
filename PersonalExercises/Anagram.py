def valid_anagram(first, second):
  lenFirst = len(first)
  lenSecond = len(second)

  if(lenFirst != lenSecond):
    return False

  lookup = {}

  for index in range(lenFirst):
    char = first[index]

    if lookup.has_key(char):
      lookup[char] += 1
    else:
      lookup[char] = 1

  for index in range(lenSecond):
    char = second[index]

    if not(lookup.has_key(char)):
      return False
    else:
      lookup[char] -= 1
    
    if lookup[char] < 0:
      return False

  print(lookup)
  return True


print(valid_anagram('anagram', 'nagaram'))
print(valid_anagram('aaz', 'zza')) # false
print(valid_anagram('anagram', 'nagaram'))
print(valid_anagram('awesome', 'awesom')) # false
print(valid_anagram('qwerty', 'qeywrt'))
print(valid_anagram('texttwisttime', 'timetwisttext'))