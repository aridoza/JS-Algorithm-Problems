// Largest Sum
// Q: How would you find the largest sum of any 2 elements?

// my solution:
// given an unordered array, want to find the 2 largest numbers
// then add those 2 numbers together
// can use Math.max to find the biggest number, then remove it from the array
// then, do Math.max again on the altered array, to get the second biggest number
// finally, add those 2 numbers together

largestSum = (arr) => {
  let input = arr; // so array can be edited with .splice()
  let largest = Math.max(...input); // find largest number
  let largestIndex = input.indexOf(largest); // find the index of the largest number and assign it to a variable, so splice knows where to cut
  input.splice(largestIndex, 1); // removes 1 item at the largest number's index location in the array
  let secondLargest = Math.max(...input); // finds the second largest number (largest number already removed)

  return largest + secondLargest;
}


// Instructor Solution:
// just fond the two largest numbers and return the sum of them
topSum = (arr) => {
  let biggest = arr[0];
  let second = arr[1];
  let len = arr.length;
  let i = 2;

  if (len < 2) {
    return null;
  }

  if (biggest < second) {
    biggest = arr[1];
    second = arr[0];
  }

  for (; i < len; i += 1) {
    if (arr[i] > biggest) {
      second = biggest;
      biggest = arr[i];
    }
    else if (arr[i] > second) {
      second = arr[i];
    }
  }
  return biggest + second;
}
