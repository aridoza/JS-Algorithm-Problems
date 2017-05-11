// Divisible Sum Pairs \\
/*
Q: Given an array of n integers, and a positive integer, k, find and print the number of (i,j) pairs where i < j and ai + aj is evenly
divisible by k.

ex: k = 3
1,2
1,2
3,6
2,1
1,2
*/

// my solution:
// use 2 loops, 1 for i and j
// make sure to skip instances where indeces i === j in loops
// only check with values after the item's index (so check if its less than item's index and continue to skip it)
// check if i < j
// check that i + j % k === 0
// if both are true, add to a variable's count
// in the end, return that variable's count of the number of possible i,j pairs that meet the criteria


divisibleSumPairs = (n,k,arr) => {
  if (arr.length < 2) {
    return 0;
  }
  let count = 0;

  let iValue = 0;
  let jValue = 0;

  for (let i = 0; i < arr.length; i += 1) {
    iValue = arr[i];
    for (let j = 1; j < arr.length; j += 1) {
      jValue = arr[j];
      if (i === j || i > j) {
        continue;
      }
      if ( (iValue + jValue) % k === 0) {
        console.log(iValue, jValue, k);
        count += 1;
      }
    }
  }
  return count;
}

// Successfully Submitted!
