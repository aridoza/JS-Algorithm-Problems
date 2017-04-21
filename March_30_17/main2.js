// String reversal
// Q: How would you reverse a string in JavaScript?

// My solution:
// can use a for loop, pass each letter in the string into a new array going backwards, then join the array items into a new string

stringReverser = (str) => {
  //creates an array and inserts each letter in the string as a separate item
  let splitString = str.split('');
  let stringLength = str.length;
  let reversedArray = [];

  for (let i = splitString.length - 1; i >= 0; i -= 1) {
    reversedArray.push(splitString[i]);
  }
  let reversedString = reversedArray.join('');
  return reversedString;
}

// Single line solution from MDN
reverseStringOneLiner = (str) => {
  return str.split('').reverse().join('');
}

// Instructor Solution:
// A: I can loop through the string and concatenate letters to a new string
reverse = (str) => {
  let rtnStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    rtnStr += str[i];
  }
  return rtnStr;
}

// Interviewer: you know concatenation performed well in modern browsers but becomes slow in older browsers like IE8. Is there a different way to do it?
// A: Sure. I can use an array and also add some checking. If the string is null or other than string this will fail.
// another solution:
reverse2 = (str) => {
  let rtnStr = [];
  if (!str || typeof str != 'string' || str.length < 2 ) {
    return str;
  }

  for (let i = str.length - 1; i >= 0; i -= 1) {
    rtnStr.push(str[i]);
  }
  return rtnStr.join('');
}

// Run time complexity: O(n)

// To make it save a bit of time - loop through half of the index:
reverse3 = (str) => {
  str = str.split('');
  let len = str.length;
  let halfIndex = Math.floor(len / 2) - 1;
  let revStr;

  for (let i = 0; i <= halfIndex; i += 1) {
    revStr = str[len - i - 1];
    str[i] = revStr;
  }
  return str.join('');
}

//Using Recursion
reverseRec = (str) => {
  if (str === "") {
    return ""
  } else {
    return reverseRec(str.substr(1)) + str.charAt(0);
  }
}


// As a string extension
// note: doesn't work with arrow syntax from ES6
String.prototype.reverser = function() {
  if (!this || this.length < 2) {
    return this;
  }
    return this.split('').reverse().join('');
}
