// Picking Numbers \\
/*
Q: Given an array of integers, find and print the maximum number of integers you can select from the array such that the absolute difference
between any of the two chosen integers is <= 1;
*/

// team solution:
// problem: only starting from most frequent number, there are edge cases where that number doesn't offer the most ints to solve
// need to use the object that counts the occurrences of each number, then loop inside that to check with each number

// update 5/22: need to start by eliminating numbers that are too far from rest of the numbers in the set
// sample test case (currently fails):
// pickingNumbers(73,[4,2,3,4,4,9,98,98,3,3,3,4,2,98,1,98,98,1,1,4,98,2,98,3,9,9,3,1,4,1,98,9,9,2,9,4,2,2,9,98,4,98,1,3,4,9,1,98,98,4,2,3,98,98,1,99,9,98,98,3,98,98,4,98,2,98,4,2,1,1,9,2,4]);

pickingNumbers = (n,arr) => {
    let a = arr;

    let numberOccurrences = {};

    for (let i = 0; i < a.length; i ++) {
        let item = a[i];
        if (!numberOccurrences[item]) {
            numberOccurrences[item] = 1;
        } else {
            numberOccurrences[item] += 1;
        }
    }

    let highest = 0;
    let count = 0;

    for (let key in numberOccurrences) {

        if (numberOccurrences[key] > highest) {
            highest = key;
        }
    }

    highest = parseInt(highest);

    let numbers = [];

    for (let j = 0; j < a.length; j ++) {
        let num = a[j];
        if (num === highest || num === highest + 1 || num === highest - 1) {
            numbers.push(num);
        }
    }

    for (let k = 0; k < numbers.length; k ++) {
        let picked = numbers[k];

        if ( Math.abs(picked - numbers[k + 1]) > 1 ) {
            numbers.splice(picked.index, 1);
        }
    }

    console.log(numbers.length);
}

// numberPicker = (n,arr) => {
//   let numbers = arr;
//
//   let
//   for (let i = 0; i < arr.length; i ++) {
//     let picked = arr[i];
//
//     for (let j = 1; j < numbers.length; j ++) {
//       let num = numbers[j];
//       if (picked === num) {
//         continue;
//       } else if (Math.abs(picked - num) > 1) {
//         numbers.splice(picked.index, 1);
//       }
//     }
//
//   }
//
//   return numbers.length;
// }
