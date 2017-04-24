// Diagonal Difference
// Q: Given a square matrix of size N x N, calculate the absolute difference between the sums of its diagonals
// Input format: the first line contains a single integer, N. The next N lines denote the matrix's rowsn with each line containing
// N space-separated integers describing the columns.
// Constraints: -100 <= Elements in the matrix <= 100
// Output format: print the absolute difference between the two sums of the matrix's diagonals as a single integer.
// ex: input:
/*
3
11 2 4
4 5 6
10 8 -12
*/
// output: 15

// my solution:
// grab the two sets of diagonal values, each go into a local array
// add up each array's values together, assign to local variable
// finally, get the absolute difference between those two values using Math.abs()

diagDiff = (n, a0, a1, a2, b0, b1, b2, c0, c1, c2) => {
  let primaryDiag = 0;
  let secondaryDiag = 0;
  // let primaryDiag = a0 + b1 + c2;
  // primaryDiag.push(a0, b1, c2);
  // let secondaryDiag = c0 + b1 + a2;
  // secondaryDiag.push(c0, b1, a2);

  // issue 1: not accounting for N number of rows/columns (this case only works with N = 3, so a 3 x 3 square)

  for (let i = 0; i < n; i += 1) {
    let count = n - (i + 1);
    // here we are assuming a is an array of arrays, each index is an array with that rows' values
    primaryDiag += a[i][i];
    secondaryDiag += a[count][i];

  }

  return Math.abs(primaryDiag - secondaryDiag);

}
