// Run Thru 'Em Day

// Reverse String
// Q: Write a function that takes a string as input and returns the string reversed
// ex: input: "hello"   output: "olleh"

// my solution:
// take the input and return it using the .reverse() method

reverseString = (str) => {
  return str.split('').reverse().join('');
}
// Tested and Submitted Successfully



// Fizz Buzz
// Q: Write a program that outputs the string representation of numbers from 1 to n
// But for multiples of 3 it should output "Fizz" instead of the number
// For multiples of 5 it should output "Buzz"
// For multiples of both 3 and 5 it should output "FizzBuzz"

// my solution:
// use a for loop to go up from 1 to n
// use conditional statements to check if the number has no remainder when divided by 3, or 5, or 3 and 5
// output the appropriate word for the respective divisor

fizzBuzz = (n) => {
  let arr = [];
  for (let i = 1; i <= n; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz")
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i.toString());
    }
  }
  return arr;
}

// Tested and Submitted Successfully




// Next Greater Element I
// Q: You are given two arrays (without duplicates) 'nums1' and 'nums2', where 'nums1''s elements are a subset of 'nums2'.
// Find all the next greater numbers for 'nums1''s elements in the corresponding places of 'nums2'.
// The Next Greater Number of a number 'x' in 'nums1' is the first greater number to its right in 'nums2'. If it does not exist, output
// -1 for this number
// ex: input: nums1 = [4,1,2], nums2 = [1,3,4,2]       output: [-1,3,-1]

// my solution:
// use conditional statement to first check that the number is in nums2, then check the index of it in nums2, then check if the
// index + 1's value of it is a greater number;
// if it is, append it to a local array, if it isn't, append -1 to the array
// return the local array once the loop completes

// tweak: for greatest number, must check from the number's index through the end of the array (nums2)

nextGreater = (nums1, nums2) => {
  let arr = [];
  for (let i = 0; i < nums1.length; i += 1) {
    let x = nums1[i];
    let ind = nums2.indexOf(x);

    let count = ind + 1;

    if (count >= nums2.length) {
      arr.push(-1);
    }

    while (count < nums2.length) {

      if (nums2[count] > nums2[ind]) {
        arr.push(nums2[count]);
        break;
      }
      if (count === nums2.length - 1) {
        arr.push(-1);
      }
      count += 1;
    }
  }
  return arr;
};

// Tested and Submitted Successfully
