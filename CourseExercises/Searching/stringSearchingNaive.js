/*
  Naive Solution
*/

function stringSearching(str, word) {
	// Loop over the longer string
	let counter = null;
	for (let i = 0; i < str.length; i++) {
    let index = i;
    let ender = 0;
    
		// Loop over the shorter string
    for (const c of word) {
			// If the characters don't match, break out of the inner loop
			if (c !== str[index]){ break }
      // If the characters do match, keep going
      else{
        index++;
        ender++;
      }

			// If you complete the inner loop and find a match, increment the count of matches
			if (ender === word.length) {
				counter++;
        i += word.length;
			}
		}
	}

	return counter;
	// Return the count
}

const lorem =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, * amet * , * amet *   sed do eiusmod tempor * amet * incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const word = 'amet';

console.log(stringSearching(lorem, word));
