// Beautiful day at the movies \\
/*
Q: Given i,j, and k, count and print the number of beautiful days when Logan and Lily can go to the movies.
*/

function processData(input) {
    //Enter your code here

    let numbers = input.split(' ');

    let i = parseInt(numbers[0]);
    let j = parseInt(numbers[1]);
    let k = parseInt(numbers[2]);

    let xArr = [];

    for (let a = i; a <= j; a ++) {
        xArr.push(a);
    }

    let xValues = [];

    for (let b = 0; b < xArr.length; b ++) {
        let x = xArr[b];
        let xRev = xArr[b].toString().split('').reverse().join('');

        let beautyCheck = Math.abs(x - xRev) % k;

        if (beautyCheck === 0) {
            xValues.push(x);
        }
    }
    console.log(xValues.length);
}

// Successfully submitted - see hackerrank example
