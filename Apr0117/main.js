// First Non-repeating Character
// Q: How could you find the first non-repeating character in a string?

// my solution
// split the string into an array
// loop through it from beginning to end, assigning/updating each item in the array to a variable
// check if the variable is not equal to the next item in the array, return that item and exit the loop
// ex: "abcda" - want to return a, but have to go through until next 'a'
// may work better using a while loop
// could create an object as well, as each character is checked add it to the object with the value 'true'
// check if a value is already in the object, it is a repeat, return that item

// My solution: April 2, 17  (Take 2)
// ex: "the quick brown fox jumps over the moon" - should return 'f'
// split the string into an array, and for each letter, add it to an object with the value 'true'
// at the end, return the letter with the lowest value
nonRepeaterFinder = (str) => {
  let wordArray = str.split(' ');
  let letterArray = wordArray.join('').split('');
  let charHolder = {};
  let firstNR;

  let count = 0;

  while (count < letterArray.length) {
    let x = letterArray[count];
    if (x in charHolder) {
      charHolder[x] += 1;
    } else {
      charHolder[x] = 1;
    }

    count += 1;
  }
  console.log(charHolder);
  for (let prop in charHolder) {
    if (charHolder[prop] === 1) {
      firstNR = prop;
      break;
    }
  }
  return `The first non-repeating character is ${firstNR}`;

}








// Note: this is for finding the first repeating character in a string;
// Must do again to find first character that does not repeat
firstRepeaterFinder = (str) => {
  let stringArray = str.split('');
  // console.log(stringArray);
  // missing piece from StackOverflow - when string is words with spaces, this removes the spaces and returns new array without whitespaces
  stringArray = stringArray.filter((stringArray) => {
    return /\S/.test(stringArray);
  });
  // console.log(stringArray);
  let itemHolder = {};
  let checker;

  let count = 0;
  while (count < stringArray.length) {
    checker = stringArray[count];
    if (checker in itemHolder) {
      return `The repeating character is ${checker}`;
    }
    itemHolder[checker] = true;
    count += 1;
  }
}


// Instructor Solution
firstNonRepeatChar = (str) => {
  let len = str.length;
  let char;
  let charCount = {};

  for (let i = 0; i < len; i += 1) {
    char = str[i];
    if (charCount[char]) {
      charCount[char] += 1;
    } else {
      charCount[char] = 1;
    }
  }

  for (let j in charCount) {
    if (charCount[j] === 1) {
      return j;
    }
  }
}
