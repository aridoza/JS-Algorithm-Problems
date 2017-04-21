// Swap number without temp
// Q: How would you swap two numbers without using a temporary variable?

// My solution:
//have 2 numbers as arguments
// return second argument first, first argument second

numberSwapper = (num1, num2) => {
  return `${num2}, ${num1}`;
}

// Instructor Solution:
// A: Take up some time thinking about it out loud. Though you know the answer, act like you are thinking and take your time to answer this one
swapNumber = (a, b) => {
  //ex: a = 5, b = 10
  console.log('before swap: ', 'a: ', a, ' b: ', b);
  b = b - a;  //ex: b = 10 - 5    5
  a = a + b;  //ex: a = 5 + 5    10
  b = a - b;  //ex: b = 10 - 5    5
  console.log('after swap: ', 'a: ', a, ' b: ', b);
}


// Another solution using bit manipulation:
swapNumb2 = (a, b) => {
  console.log('a: ' + a + ' and b: ' + b);
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  console.log('a: ' + a + ' and b: ' + b);
}
