// Sum of Two
// Q: From an unsorted array, check whether there are any two numbers that will sum up to a given number?

// ex: want to find sets of 2 numbers that will add up to 10
// array is [2, 8, 9, 4, 6, 3]
// should return true - 2 + 8, 4 + 6

// my solution: first, I would create an empty object; then I would loop through the array
// want to grab one value, and check it with each other value in the array to see if it adds up to the given number
// think it would require 2 for loops, one starting at 0, the other starting at 1, checking each number with all other numbers in the unsorted array

sumFinder = (arr, num) => {
  let currentNum;
  let secondNum;
  for (let i = 0; i < arr.length; i += 1) {
    currentNum = arr[i];
    for (let j = 0; j < arr.length; j += 1) {
      secondNum = arr[j];
      if (currentNum === secondNum) {
        continue;
      } else if (currentNum + secondNum === num) {
        console.log(`${currentNum} plus ${secondNum} add up to ${num}`);
        return true;
      }
    }
  }
  return false;
}


// Instructor Solution
sumGetter = (arr, sum) => {
  let len = arr.length;

  for (let i = 0; i < len - 1; i += 1) {
    for (let j = i + 1; j < len; j += 1) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }
  return false;
}

// Time complexity: O(n^2)

// Instructor take 2 - making it better
sumGetter2 = (arr, sum) => {
  let differ = {};
  let len = arr.length;
  let subtract;

  for (let i = 0; i < len; i += 1) {
    subtract = sum - arr[i];

    if (differ[subtract]) {
      return true;
    } else {
      differ[arr[i]] = true;
    }
  }
  return false;
}




// Bonus: Find the maximum difference of two numbers in an array

// my solution: should work with nested for loops as well, loop through the array and store the difference in a variable;
// if the difference of the next set of numbers is greater than what's in the variable, overwrite it with that amount;
// once done looping, return the variable's value

// problem: if you introduce arr[i] inside of arr[j], i is already at its max, so it will only compare the next-to-last number to all other numbers;
// fixed this by assigning num1 to the first item in the array inside the first for loop, then doing the subtracting once j is established in the
// nested for loop

maxDifference = (arr) => {
  let num1;
  let num2;
  let diff = 0;

  for (let i = 0; i < arr.length - 1; i += 1) {
    num1 = arr[i];
    for (let j = 1; j < arr.length; j += 1) {
      num2 = arr[j];
      if (num2 - num1 > diff) {
        diff = num2 - num1;
      }
    }
  }
  return `The maximum difference is ${diff}.`;
}


// This would be O(n) - only performing one calculation
maxDifference2 = (arr) => {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return max - min;
}
