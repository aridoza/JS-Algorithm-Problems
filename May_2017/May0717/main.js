// Between Two Sets \\
/*
Q: Given A and B, find and print the number of integers (possible x's) that are between the two sets.

A, B: two sets of positive integers.
We say that a positive integer, x, is between sets A and B if the following is true:
1. All elements in A are factors of x.
2. x is a factor of all elements in B.

input:
n m: n = # elements in set A; m = # elements in set B;
A integers
B integers

output:
Print the number of integers that are considered to be between A and B.

ex:
input:
2 3
2 4
16 32 96

output:
3 -> 4, 8 and 16
*/

// my solution:
// first take biggest number in A & assign to local variable
// the numbers must be >= the largest number in A, but <= the smallest number in B
// take smallest number in B and assign to local variable
// now see how many multiples of smaller number can factor into bigger number
// stuck with: have to check mArr also to see that each number is a factor of x (currently have too many loops)
// you start with x;
// first loop through nArr tosee that each is a factor;
// then if it is, you loop it through mArr to see that it's a factor of all those numbers
// so it has to leave no remainder from nArr, and fit evenly into each number in mArr

betweenTwoSets = (n,m,nArr,mArr) => {
  let smallArray = nArr;

  let smallest = Math.max(...nArr);
  let largest = Math.min(...mArr);

  let betweens = [];

  for (let i = 0; i < nArr.length; i += 1) {
    if (smallest % nArr[1] === 0) {
      continue;
    } else {
      break;
    }
  }




  while (smallest <= largest) {

    if (largest % smallest === 0) {
      for (let i = 0; i < smallArray.length; i += 1) {

        if (smallest % smallArray[i] === 0) {
          betweens.push(smallest);
          continue;
        }
      }
      smallest += 1;

    } else {
      smallest += 1;
    }


  }
  console.log(betweens);
  console.log(betweens.length);
}
