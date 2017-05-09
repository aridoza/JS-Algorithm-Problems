// Breaking the Records \\
/*
Q: Given Maria's array of scores for a season of n games, find and print the number of times she breaks her record for most and least points
scored during the season.

n = number of games
ex:
input:
9
10 5 20 20 4 5 2 25 1

output:
2 4
*/

// my solution:
// use local variables for highest & lowest to pass each following score
// if it's higher than the original highest, increase a 'highestBroken' varible by one; same for lowest
// make sure to set the highest/lowest value to that new value as it continues through the array

recordBreaker = (n, arr) => {
  let highest = arr[0];
  let lowest = arr[0];

  let highestBrokenCount = 0;
  let lowestBrokenCount = 0;

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > highest) {
      highest = arr[i];
      highestBrokenCount += 1;
    } else if (arr[i] < lowest) {
      lowest = arr[i];
      lowestBrokenCount += 1;
    }
  }

  console.log(highestBrokenCount, lowestBrokenCount);
}

// Successfully Submitted!
