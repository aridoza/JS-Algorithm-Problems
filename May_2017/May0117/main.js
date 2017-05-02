// Grading Students \\
/*
Q: Given the initial value of grade for each of Sam's n students, write code to automate the rounding process.
For each grade[i], round it according to the rules above and print the result on a new line.

n = number of Students
each student's grade

grade less than 40 = failing; doesn't get rounded
if value of grade is less than 38, no rounding
*/

// my solution:
// if the difference is < 3, grade gets rounded to next highest multiple of 5;
// if the difference = 3, the grade is not rounded
// can use while loop to find next multiple of 5 (while the 5's number is less than the grade, keep adding 5)
// for each grade, print the rounded grade on a new line

studentGrader = (n, arr) => {
  let finalGrades = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < 38) {
      finalGrades.push(arr[i]);
    } else if (arr[i] >= 38 && ( Math.abs(arr[i] - (Math.ceil(arr[i]/5)*5)) < 3 )) {
      finalGrades.push(Math.ceil(arr[i]/5)*5);
    } else if (arr[i] >= 38 && ( Math.abs(arr[i] - (Math.ceil(arr[i]/5)*5)) >= 3) ) {
      finalGrades.push(arr[i]);
    }
  }
  console.log(finalGrades);
}

// Successfully Submitted!
