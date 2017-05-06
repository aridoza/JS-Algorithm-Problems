// Challenge 1
// Find the Bug \\
/*
Q: Given an array of strings defining a grid with 1 bug in it, print the bug's location in the format r,c (where r is the row and
c is the column).

Input:
ex:
5
00000
0X000
00000
00000
00000

output:
1,1

the bug is where the x is, need to find the row and column
*/

// my solution:
// loop through each string in the array to look for the x
// when it's found, store the string's index as the row
// then find the index within that row to get the column

findTheBug = (n, arr) => {
  let output = [];

  for (let i = 0; i < arr.length; i += 1) {
    let bug = 'X';
    let r = 0;
    if (arr[i].includes(bug)) {
      r = i;
      let bugSpot = arr[i].indexOf(bug);
      output.push(r, bugSpot);
    }
  }
  console.log(`${output[0]},${output[1]}`);
}

// Challenge 1 Successfully Submitted


// Challenge 2
// Comparing Times \\
/*
Q: Given 2 times, t1 and t2, in the 12-hour AM/PM format, we want to know which time occurs first during a day. For example, if
t1 = 08:02PM and t2 = 06:51AM, then t2 occurs before t1.

Solve q queries where each query consists of some t1 and t2. For each query, print 'First' if t1 occurs before t2; Otherwise, print 'Second'.
ex:
input:
2
10:19PM 02:49AM
08:49AM 09:10AM

output:
Second
First
*/

// my solution:
// loop through each set of times t1 and t2
// split them into hour and minute
// check if the hour is 12 and the minutes includes PM to prevent error with noon and midnight times
// if both PM
// if both AM
// if both PM & same hour
// if both AM & same hour
// if both times are exactly the same

timeCompare = (q, arr) => {
  let t1;
  let t2;

  let answers = [];

  for (let i = 0; i < arr.length; i += 1) {
    t1 = arr[i][0].split(':');
    t2 = arr[i][1].split(':');

    if ( (parseInt(t1[0]) === 12 && t1[1].includes("PM")) && (t2[1].includes("AM")) ) {
      answers.push("Second");
    } else if ( (parseInt(t2[0]) === 12 && t2[1].includes("PM")) && (t1[1].includes("AM")) ) {
      answers.push("First");
    } else if ( (t1[1].includes("PM") && t2[1].includes("PM")) && ( parseInt(t1[0]) > parseInt(t2[0]) ) ) {
      answers.push("Second");
    } else if ( (t1[1].includes("PM") && t2[1].includes("PM")) && ( parseInt(t2[0]) > parseInt(t1[0]) ) ) {
      answers.push("First");
    } else if ( (t1[1].includes("AM") && t2[1].includes("AM")) && ( parseInt(t1[0]) > parseInt(t2[0]) ) ) {
      answers.push("Second");
    } else if ( (t1[1].includes("AM") && t2[1].includes("AM")) && ( parseInt(t2[0]) > parseInt(t1[0]) ) ) {
      answers.push("First");
    } else if ( (t1[1].includes("PM") && t2[1].includes("PM")) && ( parseInt(t1[1]) > parseInt(t2[1]) ) ) {
      answers.push("Second");
    } else if ( (t1[1].includes("PM") && t2[1].includes("PM")) && ( parseInt(t2[1]) > parseInt(t1[1]) ) ) {
      answers.push("First");
    } else if ( (t1[1].includes("AM") && t2[1].includes("AM")) && ( parseInt(t1[1]) > parseInt(t2[1]) ) ) {
      answers.push("Second");
    } else if ( (t1[1].includes("AM") && t2[1].includes("AM")) && ( parseInt(t2[1]) > parseInt(t1[1]) ) ) {
      answers.push("First");
    } else {
      answers.push("Second");
    }

  }
  console.log(answers);
}

// Currently only passes 1 test; consider these edge cases:
/*
12:12AM 12:13AM  -> First
12:05AM 01:05AM  -> First
11:15AM 12:15AM  -> Second
*/
