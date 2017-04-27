// Mini-Max Sum \\
/*
Q: Given 5 positive integers, find the minimum and maximum values that can be calculated by summing exactly four
of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated
long integers.

Input format:
a single line of five space-separated integers.

Output format:
Print two space-separated long integers denoting the reapective minimum and maximum values that can be calculated by
summing exactly four of the five integers. (the output can be greater than 32 bit integer).

Constraints:
each integer is in the inclusive range [1,10^9].

ex:
input:
1 2 3 4 5

output:
10 14

Explanation:
using above example, the minimal sum is 1+2+3+4 = 10  and the maximal sum is 2+3+4+5 = 14.
*/

// my solution:
// first take the input values and add to local array
// then, using 2 local variables, run a for loop and have one variable equal the sum of the first four values,
// and the other variable equal the sum of the last four values
// finally, return the min and max values separated by a space

// take 2: use for loop and find 4 smallest values, and 4 biggest values, then add those together to their respective variables
// use Math.max and Math.min to find each value, then remove it from the array and continue to search
// assume the numbers can repeat, no mention in the example
// failed case: input: 5 5 5 5 5

minMaxSum = (n1,n2,n3,n4,n5) => {
  let arr = [];
  arr.push(n1, n2, n3, n4, n5);

  let minimal = 0;
  let maximal = 0;

  let max = Math.max(...arr);
  let min = Math.min(...arr);

  if (max === min) {
    let same = min * 4;
    console.log(same + ' ' + same);
    return;
  }

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > min) {
      maximal += arr[i];
    }
    if (arr[i] < max) {
      minimal += arr[i];
    }
  }

  console.log(minimal + ' ' + maximal);
  return;
}
