// The Hurdle Race \\
/*
Q: Given n, k, and the heights of all the hurdles, find and print the minimum number of magic beverages Dan must drink to complete the race.

input:
5 4  (n,k)
1 6 3 5 2

output:
2
*/

// my solution:
// see the max number in the array of heights, then subtract k from it; this should be the minimum number of drinks he needs

raceHurdler = (n,k,arr) => {
  let highest = Math.max(arr);

  let minDrinks = 0;

  if (k < highest) {
    minDrinks = highest - k;
  }

  return minDrinks;
}

// Submitted Successfully!
// note: had to use for loop, hackerrank not accepting Math.max
