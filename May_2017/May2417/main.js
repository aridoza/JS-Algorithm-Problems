// Climbing the Leaderboard \\
/*
Q: You are given an array, scores, of monotonically decreasing leaderboard scores, and another array, alice, of Alice's cumulative scores
for each level of the game. Print m integers. The jth integer shoud indicate the current rank of alice after passing the jth level.

uses Dense Ranking:
player with highest score ranked #1
players with equal scores receive same ranking number, next player(s) receive the immediately following ranking number
ex: 4 scores are: 100,90,90,80     ->   ranks: 1,2,2,3 respectively

already n people on the leaderboard when Alice starts playing
each n score is denoted by s[i]

Alice plays for m levels
each level score is noted as alice[j]

Alice wants to know her current rank after completing each level

ex:
input:
7
100 100 50 40 40 20 10 (descending order: higher = better)
4
5 25 50 120 (ascending order: higher = better)

output:
6 (last on leaderboard)
4 (4th on leaderboard)
2
1

*/

// my solution:
// loop through both arrays, starting with Alice's scores;
// check if each score is greater than the highest value in the leaderboard, equal to a value, or inbetween a pair of values

leaderboardClimber = (n,scores,m,alice) => {
  let highScoreStart = Math.max(...scores);
  let lowScoreStart = Math.min(...scores);
  let currentRanks = {};
  currentRanks[highScoreStart] = 1;

  let rank = 2;

  for (let k = 0; k < scores.length; k ++) {
    let score = scores[k];
    if ( score !== highScoreStart && !currentRanks[score] ) {
      currentRanks[score] = rank;
      rank += 1;
    } else {
      continue;
    }
  }

  console.log(currentRanks);

  let aliceRanks = {};

  let leaderboardSize = Object.keys(currentRanks).length;

  for (let i = 0; i < alice.length; i ++) {
    let aScore = alice[i];

    if (aScore > highScoreStart) {
      aliceRanks[aScore] = 1;
      highScoreStart = aScore;
    } else if (aScore < lowScoreStart) {
      aliceRanks[aScore] = leaderboardSize + 1;
      lowScoreStart = aScore;
    }

    for (let m = 0; m < scores.length; m ++) {
      if (aScore === scores[m]) {
        aliceRanks[aScore] = currentRanks[scores[m]];
      } else if (aScore < scores[m] && aScore > scores[m + 1]) {
        aliceRanks[aScore] = currentRanks[scores[m]] + 1;
      }
    }

  }

  for (let ranking in aliceRanks) {
    console.log(aliceRanks[ranking]);
  }
}

// Currently only passing 2 of 8 test cases
