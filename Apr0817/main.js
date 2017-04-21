// Counting Zeroes
// Q: Count the total number of zeroes from 1 until n

// my solution:
// ex: if n = 100, there will be 11 zeroes including 100
// probably the longer way:
//

zeroCounter = (n) => {
  if (n < 10) {
    return 0;
  } else if (n >= 10 && n < 100){
    return Math.floor(n / 10);
  }else if (n >= 100){

    let zeroes = Math.floor(n / 10);
    zeroes = zeroes.toString().split('');
    let zeroesArray = [];

    for (let i = 0; i < zeroes.length; i += 1) {
      zeroesArray.push(parseInt(zeroes[i]));
    }
    // for 100s it would be the number / 10 plus the first value
    let extraZeroes = zeroesArray[0];
    let coreZeroes = parseInt(zeroesArray.join(''));
    console.log(coreZeroes + extraZeroes);
  }

}

// my take 2: try it like a chain, adding divisions of 10 together if there is still a remainder
// close, but doesn't work on 1000 and up
zeroChain = (n) => {
  let counter = 0;
  let remainder = Math.floor(n / 10);

  counter += remainder;

  while (remainder >= 10) {
    remainder = remainder / 10;
    counter += remainder;
  }

  return counter;
}


// Instructor Solution:
// The trick here is, if n < 100, just divide by 10; but greater than that it gets tricky
// Note: still doesn't account for zeroes for first 10 of each 100 (ex: 101, 102... 109); if those aren't counted then this is correct;
// otherwise, it needs adjusting to add 9 zeroes for every 110
countZero = (n) => {
  let count = 0;

  while (n > 0) {
    count += Math.floor(n / 10);
    n = n / 10;
  }
  return count;
}
