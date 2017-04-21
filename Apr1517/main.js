// Number Complement
// Q: Given a positive integer, output its compliment number. The complement strategy is to flip the bits of its binary representation.
// Note:
// 1. The given integer is guaranteed to fit within the range of a 32-bit signed integer
// 2. You could assume no leading zero bit in the integer's binary representation
// ex: input: 5    output: 2
// explanation: the binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So output is 2.
// ex: input: 1    output: 0

//my solution:
// first, find out how to convert an int to binary in JS
// then use the binary as a string, split into an array
// loop through the array, and for each 1 replace with 0, each 0 replace with 1
// then recombine the binary and convert it back to an integer as the final return

numComplement = (num) => {
  let baseArray = ((num >>> 0).toString(2)).split('');
  console.log(baseArray);

  for (let i = 0; i < baseArray.length; i += 1) {
    if (baseArray[i] === "0") {
      baseArray[i] = "1";
    } else if (baseArray[i] === "1") {
      baseArray[i] = "0";
    }
  }
  return parseInt(baseArray.join(''), 2);
}

// note about using parseInt(string, radix)
// 'radix' is an integer between 2 and 36, means the 'base in mathematical numeral systems' of the included string;
// A radix of 10 is for the decimal system
// A radix of 2 is used for binary systems - (assuming it's due to '1's and '0's only)
