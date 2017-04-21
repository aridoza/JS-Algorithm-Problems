// Nim Game
// Q: You are playing the following Nim Game with your friend: There is a heap of stones on the table, each time one of you take turns
// to remove 1 to 3 stones. The one who removes the last stone will be the winner. You will take the first turn to remove the stones.
// Both of you are very clever and have optimal strategies for the game.
// Write a function to determine whether you can win the game given the number of stones in the heap.
// Ex: if there are 4 stones in the heap, then you will never win the game: no matter 1,2, or 3 stones you remove, the last stone will
// always be removed by your friend.

// my solution:
// figure out the simplest case first - ex: there are 4 stones, so there will only be 2 turns
// going from there, you want to store the number of stones left in a variable, and subtract from it each turn, from 1 to 3 stones
// the challenge is to tell if you can win the game given the number of stones in the heap, and you always go first
// whever takes the last stone wins
// can use Math.random for computer player and you to choose how many stones will be taken per turn
// want to run a while loop and keep taking stones away.
// once the stones run out, want to check who was the last player (you or computer) to remove stones as it got to zero
// that player is the winner

nimGame = (stones) => {
  if (stones % 4 === 0) {
    return false;
  } else if (stones > 0 && stones < 4) {
    return true;
  } else {
    return true;
  }
  // let stonesRemaining = stones;
  //
  // let player = 0;
  // let computer = 0;

  // Take 2: determine starting number, there should be a calculation where you know player will win



  /*Incorrect - can't use random number, assume players have a strategy*/
  // // generate random number between 1 and 3
  // let selection = Math.floor(Math.random() * 3) + 1;
  //
  // while (stonesRemaining >= 0) {
  //   player = selection;
  //   computer = selection;
  //   if (stonesRemaining <= 3) {
  //     return true;
  //   }
  //   stonesRemaining -= player;
  //   if (stonesRemaining <= 0) {
  //     return true;
  //   }
  //   stonesRemaining -= computer;
  //   if (stonesRemaining <= 0) {
  //     return false;
  //   }
  // }
}

// user solution:
// theorem: the first person who gets the number that is a multiple of 4 will lose, otherwise they will win
// Proof: uses the base case as suggested by the problem, when n = 4 the player will definitely lose
canWinNim = (n) => {
  return n % 4 != 0;
}
