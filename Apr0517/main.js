// Missing Number
// Q: from an unsorted array of numbers 1 to 100 excluding one number, how would you find that number?

// my solution:
// start with smaller set (1-10)
// can use an object to store all values as 'true', then return the number that's not in the object
//

missingNumber = (arr) => {
  // ex: arr = [5,2,3,1,9,6,10,8,4]  - so 7 is the missing number to find
  let num;
  let numChecker = {};

  for (let i = 0; i < arr.length; i += 1) {
    num = arr[i];
    numChecker[num] = true;
  }

  let count = 1;

  while (count <= arr.length) {
    if (!numChecker[count]) {
      return count;
    } else {
      count += 1;
    }
  }
}

// Instructor solution
missingNum = (arr) => {
  let n = arr.length + 1;  // if it's 100 numbers total, arr.length = 99 (100 - 1 missing number), so adding 1 to know full length
  let sum = 0;
  let expectedSum = n * (n + 1) / 2;  // formula for sum of a linear series of 'n' numbers: n * (n + 1) / 2

  for (let i = 0, len = arr.length; i < len; i += 1) {
    sum += arr[i];
  }

  return expectedSum - sum;
}
