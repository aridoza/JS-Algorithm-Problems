// Birthday Cake Candles \\
/*
Q: Given the height[i] for each individual candle, find and print the number of candles she can successfully blow out.
n candles of varying height
ex:
input:
4
3 2 1 3

output:
2

explanation:
There are 2 candles at the tallest height (3), so those will be the ones that get blown out. (want to return how many times the largest
number appears)
*/

// my solution:
// first find the largest height, then how many candles there are at that height
// return the number of candles at that height

candles = (n, arr) => {
  let tallest = Math.max(...arr);
  console.log(tallest);

  let count = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === tallest) {
      count += 1;
    }
  }
  return count;
}

// Submitted successfully!
