// Remove Duplicate Character
// Q: How would you remove duplicate characters from a string?

// My solution
// first, create an empty array and pass each character in the argument string to it
// then, create an empty object. Use a for loop to loop through the characters array, and keep count of how many times each character appears using the object
// finally, use a conditional statement to check if a character in the object is only shown once, and pass those characters into a new array.
// then return this final array as a string by applying the .join method
// ex: 'abcdefabc' -> should return 'def', the only non-duplicate characters

duplicateRemover = (str) => {
  let charArray = str.split('');
  let charCount = {};
  let char;
  let finalArray = [];

  for (let i = 0; i < charArray.length; i += 1) {
    char = charArray[i];

    if (charCount[char]) {
      charCount[char] += 1;
    } else {
      charCount[char] = 1;
    }
  }
  console.log(charCount);
  for (let key in charCount) {
    if (charCount[key] === 1) {
      finalArray.push(key);
    }
  }
  return finalArray.join('') ? finalArray.join('').toLowerCase() : "No duplicate characters found."
}


// Instructor solution
// Very similar to first non-repeating character. Ask similar questions, like is it case sensitive?
// then consider using string.toLowerCase()

removeDuplicateChar = (str) => {
  let len = str.length;
  let char;
  let charCount = {};
  let newStr = [];

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
      newStr.push(j);
    }
  }
  return newStr.join('');
}
