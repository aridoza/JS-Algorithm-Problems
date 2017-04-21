// Permutations
// Q: How would you create all permutations of a string?
// permutation - all the different ways a set or number of things can be ordered or arranged

// my solution:
// for a string ex: str = 'abc' -> permutations: (abc, acb, bac, bca, cab, cba) -> will return 6
// first, split the string into a new variable
// second, create an empty object that will hold all permutations of the string
// third, use a for loop to loop through the local array of characters
// each time, you want to take a specific character, remove it, insert it in the next index, and store that permutation in the object
// once that character has been taken through the entire local array, repeat with each additional character, should allow for all
// possible permutations

//*Note: Not completely working, but close. Try to finish this way, if not make sure to understand and be able to replicate instructor solution
// on actual interview
permutator = (str) => {
  if (str.length < 2) {
    return str;
  }
  let strSplit = str.split('');
  let permutationsHolder = {};

  permutationsHolder[strSplit.join('')] = true;

  let currentChar;
  let currentCharIndex;
  let currentPermutation;
  let count = 1;


  for (let i = 0; i < strSplit.length; i += 1) {
    console.log(strSplit);
    currentChar = strSplit[i];
    console.log(currentChar);


    while (count < strSplit.length) {
      // remove char, insert 1 index higher, then join to create new permutation
      currentCharIndex = strSplit.indexOf(currentChar);
      currentPermutation = strSplit.splice(currentCharIndex, 1);

      let currentPermutation2 = strSplit.splice(count, 0, "a");
      let currentPermutation3 = strSplit.join('');

      if (!permutationsHolder[currentPermutation3]) {
        permutationsHolder[currentPermutation3] = true;
      }
      count += 1;
    }


  }
  // return Object.keys(permutationsHolder).length;
  return Object.keys(permutationsHolder);
}



// Instructor Solution
permutations = (str) => {
  let arr = str.split('');
  let len = arr.length;
  let perms = [];
  let rest;
  let picked;
  let restPerms;
  let next;

  if (len === 0) {
    return [str];
  }

  for (let i = 0; i < len; i += 1) {
    rest = Object.create(arr);
    picked = rest.splice(i, 1);

    restPerms = permutations(rest.join(''));

    for (let j = 0, jLen = restPerms.length; j < jLen; j += 1) {
      next = picked.concat(restPerms[j]);
      perms.push(next.join(''));
    }
  }
  return perms;
}

// Explanation:
// Idea is very simple. We will convert the string to an array. From the array we will pick one character and then permute the rest of it
// After getting the permutation of the rest of the characters, we will concatenate each of them with the character we have picked
// First, copy original array to avoid changing it while picking elements
// Second, use splice to remove element from the copied array. We copied the array because splice will remove the item from the array.
// We will need the picked item in the next iteration
// Ex: [1,2,3,4].splice(2,1) will return [3] and the remaining array = [1,2,4]
// Third, use recursive method to get the permutation of the rest of the elements by passing array as a string
// Finally, concat like a+permute(bc) for each
