// Chack Palindrome
// Q: How would you verify a word as a palindrome?
// Palindrome - a word that is the same backwards & forwards (ex: racecar)

// my solution:
// need to split the string, reverse it, then assign it to a new variable
// then use a conditional statement to check if the reversed variable is equal to the original argument
// if it is, return 'true', or 'this is a Palindrome'

isPalindrome = (str) => {
  let wordReversed = str.split('').reverse().join('');

  if (str === wordReversed) {
    return true;
  } else {
    return false;
  }
}




// Random value between 'x' and 'y'
// Q: If you have a function that generates random numbers between 1 and 5, how could you generate a random number between 1 and 7 using that same function?

// my solution: should be able to add '+ 2' to end of return statement
randomValueGenerator = (x, y) => {
  return Math.floor(Math.random() * y) + x;
}

randomValueSeven = () => {
  return randomValueGenerator(1, 7);
}


// Instructor Solution
rand5 = () => {
  return 1 + Math.random() * 4;
}

rand7 = () => {
  return 5 + rand5() / 5 * 2;
}
