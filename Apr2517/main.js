// A Very Big Sum \\
// Staircase (Below) \\
/*
Q: You are given an array of integers of size N. You need to print the sum of the elements in the array, keeping in mind that some
of those integers may be quite large.

Input format:
The first line of the input consists of an integer N. The next line contains N space-separated integers contained in the array.

Output Format:
Print a single value equal to the sum of the elements in the array.

Constraints:
1 <= N <= 10
0 <= A[i] <= 10^10

Ex:
input:
5
1000000001 (1 billion 1) 1000000002 1000000003 1000000004 1000000005

output:
5000000015

note: the range of the 32-bit integers is (-2^31) to (2^31 - 1) or [-2147483648, 2147483647].
When we add several integer values, the resulting sum might exceed the above range. You may need to use long long int in C/C++ or
long data type in Java to store such sums.
*/


// my solution:
// try with a for loop, adding each value to a local variable, then print the final total

veryBigSum = (n, arr) => {
  let total = 0;

  for (let i = 0; i < arr.length; i += 1) {
    total += arr[i];
  }

  return total;
}

// Successfully submitted!




/*
Staircase
Q: Consider a staircase of size n = 4:
   #
  ##
 ###
####

Observe that its base and height are both equal to 'n', and the image is drawn using '#' symbols and spaces. The last line is not preceded by
any spaces.

Write a program that prints a staircase of size 'n'.

Input format:
A single integer, n, denoting the size of the staircase.

Output format:
Print a staircase of size 'n' using '#' symbols and spaces.
Note: the last line must have 0 spaces in it.

Ex:
input:
6

output:
     #
    ##
   ###
  ####
 #####
######

Explanation:
The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n = 6.
*/

// my solution:
// try to solve by building the staircase backwards, starting with 'n' amount of #s


staircase = (n) => {
  let count = n;
  let hash = '#';
  let arr = [];
  for (let i = 0; i < n; i += 1) {
    arr.push(Array(count + 1).join(hash));
    if (count < n) {
      let blank = ' ';
      let spaces = Array((n - count) + 1).join(blank);
      arr[i] = spaces + arr[i];
    }
    count -= 1;
    // console.log(Array(count + 1).join(hash));
  }
  console.log(arr.reverse().join("\n"));
}

// Successfully submitted!
