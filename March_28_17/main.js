// Greatest Common Divisor
//Q: How would you find the greatest common divisor of two numbers?
// ex: numbers: 10, 20
// greatest common divisor would be 10

gcd = (num1, num2) => {
  let divisorsArray = [];
  let divisor = 1;

  while (divisor <= num1 || divisor <= num2) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      divisorsArray.push(divisor);
      divisor += 1;
    } else {
      divisor += 1;
    }
  }
  return divisorsArray[divisorsArray.length - 1];
}


// Instructor solution:
function greatestCommonDivisor(a, b) {
  let divisor = 2;
  let greatestDivisor = 1;

  //if you pass a negative number
  if (a < 2 || b < 2) {
    return 1;
  }

  while (a >= divisor && b >= divisor) {
    if (a % divisor === 0 && b % divisor === 0) {
      greatestDivisor = divisor;
    }
    divisor += 1;
  }
  return greatestDivisor;
}

//Instructor fancy solution:
function greatestCommonDivisorF(a, b) {
  if (b === 0) {
    return a;
  } else {
    console.log("b: ", b);
    console.log("a: ", a);
    return greatestCommonDivisorF(b, a % b);
  }
}
