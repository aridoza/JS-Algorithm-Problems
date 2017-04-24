// Plus Minus \\
/*
Q: given an array of integers, calculate which fraction of its elements are positive, which fraction of its elements are negative,
and which fraction of its elements are zeroes, respectively. Print the decimal value of each fraction on a new line.
Note: this challenge is introducing precision problems. Test cases are scaled to 6 decimal places, though answers with absolute error of up to
10^-4 are acceptable.
Input:
N -> size of the array;
N space-separated integers describing an array of numbers (a0,a1,a2...aN-1)

Output:
You must print out 3 lines:
1. A decimal representing of the fraction of positive numbers in the array compared to its size.
2. A decimal representing of the fraction of negative numbers in the array compared to its size.
3. A decimal representing of the fraction of zeroes in the array compared to its size.

Ex:
input:
6
-4 3 -9 0 4 1

output:
0.500000
0.333333
0.166667
*/

// my solution:
// want 3 local variables, one for each return decimal amount
// loop through array of integers, and use conditional statements to increase respective value by 1
// once the loop completes, divide N by each fractional amount and return a value up to 6 decimal places.
// return the 3 fractional values

plusMinus = (n, arr) => {
  let pos = 0;
  let neg = 0;
  let zeroes = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === 0) {
      zeroes += 1;
    } else if (arr[i] > 0) {
      pos += 1;
    } else if (arr[i] < 0) {
      neg += 1;
    }
  }
  pos = (pos / n).toFixed(6);
  neg = (neg / n).toFixed(6);
  zeroes = (zeroes / n).toFixed(6);
  console.log(pos);
  console.log(neg);
  console.log(zeroes);
}
