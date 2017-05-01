// Forming a Magic Square \\
/*
Q: We define a magis square to be an n x n matrix of distinst positive integers from 1 to n^2 where the sum of any row, column, or
diagonal (of length n) is always equal to the same number (the 'magic constant').

Consider a 3 x 3 matrix, s, of integers in the inclusive range [1,9]. We can convert any digit, a, to any other digit, b, in the range
[1,9] at cost |a - b|.

Given s, convert it into a magis square at minimal cost by changing zero or more of its digits. Then print this cost on a new line.

ex:
input:
4 9 9
3 5 7
8 1 5

output:
1

*/

// my solution:
// input will be an array 3 x 3, so check each combination's sum
// then check which sum is different from the rest
// see what number needs to be changed, by how much, and store that difference in a variable
// once all sides add up to same number, return the total 'cost'


magicSquare = (arr) => {
  let cost = 0;
  let sums = [];

  let col1 = arr[0][0] + arr[1][0] + arr[2][0];
  let col2 = arr[0][1] + arr[1][1] + arr[2][1];
  let col3 = arr[0][2] + arr[1][2] + arr[2][2];

  let row1 = arr[0][0] + arr[0][1] + arr[0][2];
  let row2 = arr[1][0] + arr[1][1] + arr[1][2];
  let row3 = arr[2][0] + arr[2][1] + arr[2][2];

  sums.push(col1, col2, col3, row1, row2, row3);
  let magicConstant = 0;
  let maxCount = 1;
  let occurrences = {};

  for (let i = 0; i < sums.length; i += 1) {
    let el = sums[i];

    if (occurrences[el] == null) {
      occurrences[el] = '1';
    } else {
      occurrences[el] += '1';
    }

    if (occurrences[el] > maxCount) {
      magicConstant = el;
      maxCount = occurrences[el];
    }
  }

  console.log(occurrences);
  console.log(magicConstant);

}

// needs more testing
/*
sample input (currently fails):
4 5 8
2 4 1
1 9 7
*/
