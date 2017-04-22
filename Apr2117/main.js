// Hackerrank - Day 1
// Simple Array Sum
// Q: Given an array of integers, can you find the sum of its elements?

// my solution:
// use for loop to add each value in the array to a local variable, then return the local variable

arrSum = (num, arr) => {
  let total = 0;
  for (let i = 0; i < num; i += 1) {
    total += arr[i];
  }
  return total;
}

// Compare the Triplets
// Q: Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100
// for three categories: problem clarity, originality, and difficulty.
// We define the rating for Alice's challenge to be the triplet A = (a0,a1,a2), and Bob to be the triplet B = (b0,b1,b2).
// Find their comparison points by comparing a0 with b0, a1 with b1, and a2 with b2.
// if ai > bi, Alice is awarded 1 point; If ai < bi, Bob is awarded 1 point; if ai = bi, neither person receives a point.
// Comparison points is the total points a person earned.
// Given A and B, can you compare the two challenges and print their respective comparison points?
// ex: input: 5 6 7  3 6 10
// Constraints: 1 <= ai <= 100;     1 <= b1 <= 100;
// Output: print 2 space-separated integers denoting the respective comparison points earned by Alice and Bob.

// my solution:
// first, assign a values and b values to their own arrays
// next, use a loop to compare values of each array at each index
// if a is higher, award a local variable for Alice with 1 point; if b is higher, award a local variable for Bob with 1 point
// once the loop completes, return each point total separated by a space in the middle

solve = (a0, a1, a2, b0, b1, b2) => {
  let alicePoints = 0;
  let bobPoints = 0;

  let alpha = [];
  alpha.push(a0, a1, a2);
  let beta = [];
  beta.push(b0, b1, b2);

  for (let i = 0; i < alpha.length; i += 1) {
    if (alpha[i] > beta[i]) {
      alicePoints += 1;
    } else if (alpha[i] < beta[i]) {
      bobPoints += 1;
    } else if (alpha[i] === beta[i]) {
      continue;
    }
  }
  return alicePoints + " " + bobPoints;
}
