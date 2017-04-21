// Keyboard Row
// Q: Given a list of words, return the words that can be typed using letters of the alphabet on only one row of American
// keyboard
// Row1: [q,w,e,r,t,y,u,i,o,p]
// Row2: [a,s,d,f,g,h,j,k,l]
// Row3: [z,x,c,v,b,n,m]

// Example 1: input: ["Hello", "Alaska", "Dad", "Peace"]    output: ["Alaska", "Dad"]
// Note:
// 1. You may only use one character in the keyboard more than once
// 2. You may assume the input string will only contain letters of the alphabet

// my solution:
// have 3 arrays, one for each row of letters
// split the input words into local array
// make all letters in local array lowercase
// loop through letters, and check if each letter is in the same row of letters
// if it is, pass it into new local array
// at end of loop, rejoin the letters of the same row and return the full words

keyboardRow = (arr) => {
  let top = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  let middle = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  let bottom = ["z", "x", "c", "v", "b", "n", "m"];

  // Take 2:
  // split each word into separate array in for loop
  // then create another for loop, this time splitting the word into separate letters in an array
  // now check if each letter is in row1 OR row2 OR row3
  // if it is, add it to empty array created at root of function to be returned at the end

  let baseArr = [];

  let char;

  arr.forEach((word) => {
    let item = word.toLowerCase();
    console.log(item);
    if (item in top || item in middle || item in bottom) {
      baseArr.push(item);
    }

  });

  // for (let i = 0; i < arr.length; i += 1) {
  //
  //     char = arr[i].split(',');
  //     let splitter = char.toString().toLowerCase();
  //
  //
  //
  //     // Problem to solve: can't figure out how to check that all characters of a word are only in one array of keyboard letters
  //     // Maybe a while loop?
  //
  //     // console.log(_.intersection(top, char));
  //
  //
  // }
  console.log(baseArr);
}
