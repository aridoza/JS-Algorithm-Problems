// Q: If you have a string like "I am the good boy", how can you generate "I ma eht doog yob"?  Note - words are in place but in reverse

// My solution:
// split the string into individual words, and store in an array
// then use a for loop to reverse each word individually, and add it to a separate variable
stringReverser = (str) => {
  let words = str.split(' ');
  let wordsReversed = '';

  for (let i = 0; i < words.length; i += 1) {
    // don't add a space at the end if it's the last word in the array
    if (i === words.length - 1) {
      wordsReversed += words[i].split('').reverse().join('');
    } else {
      wordsReversed += words[i].split('').reverse().join('') + ' ';
    }
  }
  return wordsReversed;
}


// Instructor Solution
// To do this, have to do both string reverse and word reverse
reverseInPlace = (str) => {
  return str.split(' ').reverse().join(' ').split('').reverse().join('');
}
