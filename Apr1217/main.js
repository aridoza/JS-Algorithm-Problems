// Reverse Words in a String III
// Q: Given a string, you need to reverse the order of characters in each word within a sentence while still preserving
// whitespace and initial word order
// Ex: "Let's take LeetCode contest"  -> "s'teL ekat edoCteeL tsetnoc"

// my solution:
// try the string.split('').reverse().join('') in one line, to try and keep the whitespace and upper/lowercase as is
// try 2: split string into array by word, then reverse the words, and rejoin adding a whitespace between words

stringReverser3 = (str) => {
  let splitWords = str.split(' ');
  console.log(splitWords);
  let currentWord;
  let reversedArray = [];

  for (let i = 0; i < splitWords.length; i += 1) {
    currentWord = splitWords[i].split('').reverse().join('');
    reversedArray.push(currentWord);
  }
  return reversedArray.join(' ');
}

// Instructor Solution (pieces from Java - typing as JavaScript)
// let words = str.split(' ');
// let res = '';
// for loop (words.length) -> {  res += words[i].reverse().toString() + " ";   }
// (after exiting for loop) - return res.trim();
// Time Complexity: O(n) - where 'n' is the length of the string
// Space Complexity: O(n) - where 'res' of size 'n' is used
