// Minimum Absolute Difference in an Array \\
/*
Q: Given an array of n integers, find and print the minimum absolute difference between any two elements in the array.

input:
n
arr

ex:
3
3 -7 0

output:
integer

ex:
3
*/


// my solution:
// have 2 loops going that grabs each value in the array and subtracts each other array item from it using Math.abs
// store each absolute difference in a separate local array
// once both loops are complete, return the Math.min of the local array of absolute differences

minimumAbsoluteDifference = (n, arr) => {
  let absoluteDifferences = [];

  for (let i = 0; i < a.length - 1; i += 1) {
    let x = a[i];
    for (let j = 1; j < a.length; j += 1) {
      let y = a[j];
      if (i === j) {
        continue;
      }
      // console.log(x, y);
      // console.log(Math.abs(x - y));

      absoluteDifferences.push(Math.abs(x - y));
    }
  }
  console.log(Math.min(...absoluteDifferences));
}
