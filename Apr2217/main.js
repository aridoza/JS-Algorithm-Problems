// A Very Big Sum
// Q: You are given an array of integers of size N. You need to print the sum of the elements in the array, keeping in mind that some of
// those integers may be quite large.
// Format: N, [a0 a1 a2 a3] -> N = number of integers to be added; a0...aN = individual integers to be added together
// ex: input: 5, 1000000001, 1000000002, 1000000003, 1000000004, 1000000005  -> output: 5000000015;

// my solution:
// first put the integers to be added together into an array;
// then loop through the array and add each number to a local variable
// finally, return that local variable's value

bigSum = (n, a0, a1, a2, a3, a4) => {
  let numsArray = [];
  numsArray.push(a0, a1, a2, a3, a4);
  let total = 0;

  for (let i = 0; i < numsArray.length; i += 1) {
    total += numsArray[i];
  }
  return total;
}
