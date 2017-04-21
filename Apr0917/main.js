// subString
// Q: How can you match substring of a string?

// my solution:
// .substring method returns a substring, taking index values as arguments
// if you include start and end indeces, it is exclusive of end index value
// ex: subStr('abcsdsdksdjkj', 'ab')  -> would return 0, because that substring is found at index '0' of the original string

// I would split the original string and substring into separate arrays
// have to check where in the original string the substring is, has to be in the correct order, but could start anywhere in the string
// once starting letter is found, have to have rest of the letters match the rest of the substring order
// if that is the case, return the index value of the first character

subStringer = (str, sub) => {
  let origSplit = str.split('');
  let subSplit = sub.split('');

  let subStart = 0;
  let count = 1;

  for (let i = 0; i < origSplit.length; i += 1) {
    if (origSplit[i] === subSplit[0] && subSplit.length > 1) {
      subStart = i;
      while (count < subSplit.length) {
        if (origSplit[i + count] !== subSplit[count]) {
          break;
        } else if (origSplit[i + count] === subSplit[count]){
          console.log(`${origSplit[i + count]} matches ${subSplit[count]}`);
          count += 1;
        }
      }
      if (count === subSplit.length) {
        return subStart;
      }
    }
  }
  return 'No matching substrings found.';
}


// Instructor Solution
subStringFinder = (str, subStr) => {
  let idx = 0;
  let i = 0;
  let j = 0;
  let len = str.length;
  let subLen = subStr.length;

  for (; i < len; i += 1) {
    if (str[i] === subStr[i]) {
      j += 1;
    } else {
      j = 0;
    }

    // check starting point for a match
    if (j === 0) {
      idx = i;
    } else if (j === subLen) {
      return idx;
    }
  }
  return -1;
}
