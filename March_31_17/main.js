// Q: How would you reverse words in a sentence?

// My solution: try the .split('').reverse().join('') to keep it concise (ex: words starting with capital letter)

// wordReverser = (str) => {
//   return str.split('').reverse().join('');
// }
//
// // if you want it to be all lowercase:
// wordReverserLC = (str) => {
//   return str.split('').reverse().join('').toLowerCase();
// }

// Take 2 (misunderstood question - want to return the words readable but last word first, etc.)
// Would want to push each word separately into an array, then reconstruct going backwards from end of the array
wordReverser2 = (str) => {
  let wordArray = str.split(' ');

  //set it to an empty string first, otherwise it will start with "undefined"
  let reversedWords = '';

  for (let i = wordArray.length - 1; i >= 0; i -= 1) {
    // remove the trailing space if its the last word
    if (i === 0) {
      reversedWords += wordArray[i].trim();
    } else {
      reversedWords += `${wordArray[i]} `;
    }
  }
  return reversedWords;
}


// Instructor Solution:

reverseWords = (str) => {
  let rev = [];
  let wordLen = 0;

  for (let i = str.length; i >= 0; i -= 1) {
    if (str[i] === ' ' || i === 0) {
      rev.push(str.substr(i, wordLen + 1));
      wordLen = 0;
    }
    else {
      wordLen += 1;
    }
  }
  return rev.join(' ');
}

// Quick solution with built-in methods:
reverseWordsQuick = (str) => {
  return str.split(' ').reverse().join(' ');
}
