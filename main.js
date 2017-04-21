// 3/27/2017
//Fibonacci Sequence
//Question: How do you get the nth Fibonacci number?
//Fibonacci: each number is the sum of the 2 previous numbers
//ex: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// Solution: start with an array and have function check through it

fibNumber = (num) => {
  let sequence = [];
  let first = 0;
  let second = 1;
  sequence.push(first);
  sequence.push(second);

  while (num > sequence.length - 1) {
    let twoBack = sequence.length - 2;
    let oneBack = sequence.length - 1;
    let nextNum = sequence.length;

    sequence[nextNum] = sequence[twoBack] + sequence[oneBack];
  }
  console.log(sequence);
  return sequence[num];
}




//Course Solution:
//Runtime complexity: O(n)
fibonacci = (n) => {
  let fibo = [0, 1];

  if (n <= 2) {
    return 1;
  }

  for (let i = 2; i <= n; i += 1) {
    fibo[i] = fibo[i-1] + fibo[i-2];
  }

  return fibo[n];
}


//Recursive solution:
fibonacciRec = (n) => {
  if (n <= 1) {
    return n;
  } else {
    return fibonacciRec(n - 1) + fibonacciRec(n - 2);
  }
}
